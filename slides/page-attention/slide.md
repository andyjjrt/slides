---
theme: default
download: true
transition: slide-up
routerMode: hash
hideInToc: true
mdc: true
fonts:
  sans: Outfit, Noto Sans TC
  mono: Ubuntu Mono
##########################
title: Efficient Memory Management for Large Language Model Serving with PagedAttention
name: page-attention
themeConfig:
  glowHue: -30
---

# **Efficient Memory Management for Large Language Model Serving with PagedAttention**

Woosuk Kwon, Zhuohan Li, Siyuan Zhuang, Ying Sheng, Lianmin Zheng, Cody Hao Yu, Joseph E. Gonzalez, Hao Zhang, Ion Stoica
<br />

Presenter: Jun-Chen Hung

2024/12/04

[https://arxiv.org/pdf/2309.06180](https://arxiv.org/pdf/2309.06180){class="abs-bl bottom-6 left-15 text-gray text-sm"}

<style>

h1 {
  @apply !text-4xl mb-8;
}

</style>

---

# Outline

- Introduction
- Backgrounds
- Problem
- Method
- Experiments
- Conclusion

---
layout: section
glowHue: 50
---

# **Introduction**

---
glowHue: 50
---

# Introduction

- Identify the challenges in memory allocation in serving LLMs and quantify their impact on serving performance.
- Propose [PagedAttention]{color=red}, an attention algorithm that operates on KV cache stored in non-contiguous paged memory, which is inspired by the virtual memory and paging in OS.
- Design and implement [vLLM]{color=red}, a distributed LLM serving engine built on top of PagedAttention.
- Evaluate vLLM on various scenarios and demonstrate that it substantially outperforms the previous state-of-the art solutions such as FasterTransformer and Orca

---
layout: section
glowHue: -220
---

# **Backgrounds**


---
layout: two-cols
transition: fade
glowHue: -200
---

# Backgrounds

- Transformer
  - $q_i=W_qx_i, k_i=W_kx_i, v_i=W_vx_i$
  - $a_{ij}=\frac{exp(q_j^\intercal k_t / \sqrt{d})}{\sum_{t=1}^iexp(q_i^\intercal k_t / \sqrt{d})}$
  - $o_{i}=\displaystyle\sum_{t=1}^ia_{ij}v_i$
- Autoregressive Generation
  - Depends on all previous tokens.
  - 2 phases: [prompt phase]{color=red} & [autoregressive generation phase]{color=orange}
- KV cache
  - Reduce compute count of previous tokens.


::right::

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*8xqD4AYTwn6mQXNw0uhDCg.gif){width=90%}

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*uyuyOW1VBqmF5Gtv225XHQ.gif){width=90%}


---
glowHue: -200
---

# Backgrounds

- Batching
  - Naive: Make earlier requests wait for later ones or delay the incoming requests until earlier ones finish.
  - Fine-grained: New requests can be processed after waiting for a single iteration, not waiting for the entire batch to complete. eg. Cellular batching, Iteration-level scheduling

<div class="grid grid-cols-2 gap-2">

![](https://images.ctfassets.net/xjan103pcp94/1LJioEsEdQQpDCxYNWirU6/82b9fbfc5b78b10c1d4508b60e72fdcf/cb_02_diagram-static-batching.png)

![](https://images.ctfassets.net/xjan103pcp94/744TAv4dJIQqeHcEaz5lko/b823cc2d92bbb0d82eb252901e1dce6d/cb_03_diagram-continuous-batching.png)

</div>

[https://www.anyscale.com/blog/continuous-batching-llm-inference](https://www.anyscale.com/blog/continuous-batching-llm-inference){class="abs-bl bottom-6 left-15 text-gray text-sm"}

---
layout: section
glowHue: -120
---

# **Problem**

---
transition: fade
glowHue: -120
---

# Problem

- **Large KV cache**
  - Single token KV cache of 13B OPT model: [800KB]{color=red}
    - [2]{color=red} (k&v vectors) × [5120]{color=red} (hidden state size) × [40]{color=red} (number of layers) × [2]{color=red} (bytes per FP16).
  - 2048 tokens costs [1.6GB]{color=orange} KV cache size
- **Complex decoding algorithms**
  - LLM services offer a range of decoding algorithms for users to select <br /> from, each with varying implications for memory management <br /> complexity.
- **Scheduling for unknown input & output lengths.**
  - Requires the memory management system to accommodate a wide <br />range of prompt lengths. 

<img src="/KV-cache.png" class="w-50 absolute right-12 bottom-22" />

---
glowHue: -120
---

# Example

<img src="/MemoryManagementProblem.png" />

- Reserved: For future tokens.
- Internal fragmentation: for potential maximum sequence lengths.
- External fragmentation: From the memory allocator like the buddy allocator.

---
layout: section
---

# **Method**


---
transition: fade
---

# PagedAttention

- Inspired by the classic idea of paging in operating systems.
- KV Block $(B)$: key and value vectors for a fixed number of tokens.
  - Key block: $K_j = (k_{(j-1)B+1},...,k_{jB})$
  - Value block: $V_j = (v_{(j-1)B+1},...,v_{jB})$
  - $A_{ij}=\frac{exp(q_i^\intercal K_j / \sqrt{d})}{\sum_{t=1}^{[i/B]}exp(q_i^\intercal K_t 1 / \sqrt{d})}, A_ij = (a_{i,(j-1)B+1},...,a_{i,jB})$
  - $o_{i}=\displaystyle\sum_{t=1}^{[i/B]}V_jA_{ij}^\intercal$
- Allows the [KV blocks]{color=red} to be stored in [non-contiguous]{color=red} physical memory
- Enables more flexible paged memory management in vLLM.

<img src="/PageAttention.png" class="abs-tr top-24 right-5 h-36" />

---
transition: fade
---

# KV Cache Manager

- Analogous to the virtual memory
- Contiguous logical pages can correspond to non-<br/>contiguous physical memory pages.
- Enabled by PagedAttention, we organize the KV cache <br/> as fixed-size KV blocks, like pages in virtual memory.
- Can serve multiple requests at the same time
  

<img src="/KVCacheManager.png" class="abs-tr top-24 right-5 w-100" />

---
clicks: 2
transition: fade
---

# Decoding with PagedAttention and vLLM


<vllmExample />

---
transition: fade
---

# Multiple Decode

<img src="/MultiDecode.png" />

---
transition: fade
---

# Parallel sampling

<img src="/Parrellel.png" />

---
transition: fade
---

# Beam Search

<img src="/BeamSearch.png" />

---
transition: fade
---

# Shared Prefix

<img src="/SharedPrefix.png" />

---
transition: fade
---

# Scheduling and Preemption

- Scheduling policy: [first-come-first-serve]{color=red}
- Question: The input prompts for an LLM can [vary]{color=red} significantly in length, and the resulting output lengths are [not known a priori]{color=red}
  1. Which blocks should it evict?
  2. How to recover evicted blocks if needed again?

---
transition: fade
---

# Scheduling and Preemption

1. Which blocks should it evict?
- Apply **all-or-nothing** eviction policy
      - Multiple sequences within one request are gang-scheduled as a **Sequence Group**.


---
transition: fade
---

# Scheduling and Preemption

1. &nbsp;
2. How to recover evicted blocks if needed again?
  - **Swapping**
    - Classic technique used by most virtual memory implementations
    - Selects a set of sequences to evict and transfer their KV cache to the CPU, and stop accepting new requests.
    - Bring back and continue the processing of that sequence.
  - **Recomputation**
    - Recompute the KV cache when the preempted sequences are rescheduled.
    - Recomputation latency can be significantly lower than the original latency because they are in the Sequence Group.

<style>

ol {
  li:first-child {
    list-style: none;
    height: 0px;
  }
}

</style>

---
transition: fade
---

# Distributed Execution

- Support Megatron-LM style tensor model parallelism  <br /> strategy on Transformers
- Scheduler: Calculate block table of evry worker(shard), <br /> broadcast block table when start computing  
-  GPU workers do not need to synchronize on memory <br /> management.

<img src="/vLLM.png"  class="abs-tr top-24 right-5 w-100" />

---

# Implementation

- Kernel-level Optimization
  - Optimize memory access patterns that are not efficiently supported by existing systems PagedAttention introduces.
- Supporting Various Decoding Algorithms
  - `fork`: Creates a new sequence from an existing one
  - `append`: Appends a new token to the sequence
  - `delete`: Deletes the sequence

---
layout: section
glowHue: 150
---

# **Experiments**

---
transition: fade
glowHue: 150
---

# Experimental Setup

- **Model**: OPT 13B, 66B, 175B, Llama 13B
- **Server**: A2 instance of NVIDIA A100 GPUs on Google Cloud
- **Workload**: ShareGPT, Alpaca
- **Baseline**: 
  - FasterTransformer: Distributed inference engine highly <br /> optimized for latency.
  - Orca: SOTA LLM serving system optimized for throughput.
    - Orca(Oracle): reserved space == real space
    - Orca(Pow2): reserved space <= 2x real space
    - Orca(Oracle): reserved space == `MAX_LENGTH`
- **Key metrics**: *normalized latency* of the system

<img src="/Experiment/Setup.png"  class="abs-tr top-24 right-5 w-96" />

---
transition: fade
glowHue: 150
---

# Baseline sampling

<img src="/Experiment/Baseline.png" />

---
transition: fade
glowHue: 150
---

#  Parallel Sampling and Beam Search

<img src="/Experiment/Parallel.png" />

---
transition: fade
glowHue: 150
---

#  Parallel Sampling and Beam Search

<img src="/Experiment/ParallelMemoryReduce.png" />

---
transition: fade
glowHue: 150
---

#  Shared prefix

<img src="/Experiment/SharedPrefix.png" class="h-80%" />

---
transition: fade
glowHue: 150
---

#  Chatbot

<img src="/Experiment/Chatbot.png" class="h-80%" />

---
glowHue: 150
---

#  Ablation Study

<div class="grid grid-cols-2 gap-4">
  <div>
    <img src="/Experiment/Ablation1.png" />
  </div>
  <div>
    <img src="/Experiment/Ablation1.png" />
  </div>
</div>

<!--

vLLM GPU kernel involve extra overheads of:
- accessing the block table
- executing extra branches
- handling variable sequencelengths.

-->

---
layout: section
glowHue: 0
---

# **Conclusion**

---
glowHue: 0
transition: fade
---

# Conclusion

- **Problem**
  - Large KV cache
  - Complex decoding algorithms
  - Scheduling for unknown input & output lengths.
- **Solution**
  -  Proposes PagedAttention, a new attention algorithm that allows attention keys and values to be stored in non-contiguous paged memory.
  -  Presents vLLM, a high-throughput LLM serving system with efficient memory management enabled by PagedAttention.
- **Experiment**
  - 2-4× throughput improvements over the SOTA systems.

---
glowHue: 0
layout: two-cols
---

# [Pros]{color=green}

- Key feature is inovative
- Support multi-node inference
- Opensource with Apache 2.0 licences

<br /><br />

# [Cons]{color=red}

- Quite unstable

::right::

![](/vLLMv1.png)


[The seventh vLLM meetup. 2024/11/14](https://docs.google.com/presentation/d/1e3CxQBV3JsfGp30SwyvS3eM_tW-ghOhJ9PAJGK6KR54/edit#slide=id.g31455c8bc1e_1_45){class="abs-bl bottom-6 left-15 text-gray text-sm"}

---
layout: section
glowHue: 100
---

# **Q&A**