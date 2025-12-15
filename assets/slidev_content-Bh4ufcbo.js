const e=[{id:`slides/eagle3`,path:`eagle3`,fullPath:`/home/runner/work/slides/slides/slides/eagle3/slides.md`,sourceDir:`/home/runner/work/slides/slides/slides`,frontmatter:{theme:`../../theme`,title:`EAGLE: Speculative Sampling Requires Rethinking Feature Uncertainty`,name:`eagle3`,themeConfig:{glowHue:100},addons:[`../addons/back-to-home`,`../addons/background-animation`,`../addons/page-number`]},content:`## EAGLE: Speculative Sampling Requires Rethinking Feature Uncertainty
Yuhui Li1, Fangyun Wei, Chao Zhang, Hongyang Zhang<br />
Peking University, Microsoft Research, University of Waterloo 4Vector Institute

NeurIPS 2025

2025/10/20<br />
Jun-Chen, Hung

<style>
h2 {
  @apply text-4xl font-bold;
}
</style>

---

# Introduction

- The remarkable capabilities of modern Large Language Models (LLMs) are often offset by a significant operational challenge: their [autoregressive]{color=red}, [token-by-token generation process]{color=red} makes inference slow and computationally expensive.

- Speculative sampling accelerates this process using a ["draft and verify"]{color=red} approach, where a smaller, faster model generates a sequence of draft tokens that are then validated in parallel by the larger target model, significantly reducing latency.

- EAGLE-3 stands as the culmination of the EAGLE series, a state-of-the-art speculative sampling method that achieves unprecedented speedups. It introduces a novel "Training-Time Test" (TTT) architecture and multi-layer feature fusion to overcome the performance plateaus of its predecessors.

<div class="flex justify-center">
  <img src="/x3.png" class="w-75%">
</div>

---
layout: image-right
image: /The-schematic-diagram-of-speculative-sampling-compared-with-original-generation-In-the.png
backgroundSize: contain 
---

# Related Work - Speculative Sampling
[Google Deepmind](https://arxiv.org/pdf/2302.01318)

- Involves using a smaller, faster draft model to generate a sequence of tokens. These tokens are then passed to the larger target model for parallel verification, accepting a prefix of the draft that matches the target model's predictions.

- Its primary limitation is that the [high overhead]{color=red} and [lower accuracy]{color=red} of the draft model can constrain acceleration gains, as the target model frequently rejects inaccurate drafts.

---
layout: image-right
image: /x6.png
backgroundSize: contain 
---

# Related Work - Eagle
[ICML 2024](https://arxiv.org/pdf/2401.15077v3)

- Instead of token prediction, EAGLE use [feature prediction]{color=red}, which proved to be a simpler and more effective prediction target.

- To fix feature uncertainty, EAGLE predict feature with token to make it stable

- Use [tree-structured]{color=red} predict chain instead of chain-structured => increase accept length $\\tau$

<!--

以下是 EAGLE 相對於標準 SpS 的主要增強點：

### 1. **在特徵層級（Feature Level）進行自迴歸**

標準 SpS 是在 **Token 層級**進行自迴歸預測。
EAGLE 的第一個觀察是：在**特徵層級（feature level）**進行自迴歸預測比在 Token 層級更簡單。這裡的「特徵」通常指的是目標 LLM 中 **LM Head 之前的倒數第二層特徵 (second-to-top-layer feature)**。

*   **優勢**：特徵序列相比於 Token 序列更具規律性。在特徵層級上進行自迴歸處理，然後再利用目標 LLM 的 LM Head 獲取 Token，能產生更好的結果。實驗證明，僅僅透過特徵層預測，速度提升比直接預測 Token 提升了約 1.9x 比 1.5x。

### 2. **解決採樣過程中的不確定性 (Feature Uncertainty)**

在 LLM 生成過程中，採樣（如 nucleus 採樣）會引入隨機性，導致特徵序列中產生不確定性。例如，在給定相同前綴 $f_I$ 後，採樣結果可能是 "am" 或 "always"，這將導致後續特徵 $f_{am}$ 和 $f_{always}$ 截然不同。

*   **EAGLE 的解決方案**：EAGLE 透過將**提前一個時間步的 Token 序列（包含採樣結果）**納入起草模型的輸入來解決這個不確定性。
*   **優勢**：加入提前的 Token 序列，能讓起草模型有效考慮採樣結果帶來的隨機性。實驗顯示，解決不確定性後，速度提升比僅使用特徵預測進一步提高到 2.8x。

### 3. **從鏈式草稿 (Chain-structured) 到樹狀草稿 (Tree-structured)**

標準 SpS 使用**鏈式結構（chain-structured）**的草稿。如果草稿中某個 Token 被拒絕，後續所有 Token 都必須被拋棄。
EAGLE 則採用**樹狀結構（tree-structured）**草稿。

*   **優勢**：樹狀結構允許在一個 Token 被拒絕時，嘗試**替代的分支**，潛在地提高平均接受長度 $\\tau$。EAGLE 利用 **Tree Attention** 在驗證階段平行處理這個樹狀草稿。

總結來說，EAGLE 結合了**特徵層預測**、**Token 序列輸入**來解決不確定性，以及**樹狀草稿**來最大化單次目標 LLM 呼叫的效益，從而實現了比標準投機採樣（SpS）更顯著的加速。


-->

---
layout: image-right
image: /x9.png
backgroundSize: contain 
---

# Related Work - Eagle2
[EMNLP 2024](https://arxiv.org/pdf/2401.15077v3)

- Identified the limitation of EAGLE's [static draft tree]{color=red}, which implicitly assumes that the acceptance rate of draft tokens depends only on their position in the tree structure.

- EAGLE-2's solution was a [context-aware dynamic draft tree]{color=red}. Use [Expand]{color=red} and [Rerank]{color=red} to dynamically adjust the shape of the draft tree based on the immediate context, allocating resources more efficiently.

---
layout: image-right
image: /image.png
backgroundSize: contain 
---

# Related Work - HASS
[ICLR 2025](https://arxiv.org/pdf/2408.15766v3)

- EAGLE2 uses target model feature as training data, but use self predicted feature as inference input, causes [Exposure Bias]{color=red} (暴露偏差)
- Previous training focus on target model vocabulary, but real target is predict [expect token]{color=red} by target model
- By modify training process and loss function, HASS gain [8% ~ 20%]{color=red} speed up compare to EAGLE2

---
layout: image-right
image: /image1.png
backgroundSize: contain 
---

# Problem

- Recent LLMs increase training tokens, but not for EAGLE draft model
  - Old EAGLE use feature loss $L_{fea}$ and token loss $L_{token}$ to train the model
  - Two losses cause [additional constraint]{color=red}

---

# Problem

-  These top-layer features correspond to the logits of the next token.
    - Relying solely on these limited features makes predicting the [next-next token]{color=red} a significant challenge for the draft model
- HASS mitigate the error accumulation caused by inaccurate feature predictions in EAGLE
  - But still use [feature prediction]{color=red}

![alt text](/image3.png){class=w-120}

---
layout: image-right
image: /image2.png
backgroundSize: contain 
---

# Solution

- Multi-Layer Feature Fusion
  - Concatenating [low]{color=green}, [middle]{color=yellow}, and [high]{color=orange}-level feature sequences from the target model.
  - Use an FC Layer reduce 3*k back to k dimension
  - When inference, use previous generated token to predict next token

---

# Solution

- Training-Time Test (TTT):
  - Removes the feature prediction constraint.
  - Simulates m ulti-step generation during the training phase by feeding the draft model's own outputs back into it.

<div class="flex justify-center pt-4">
  <img src="/image4.png" class="w-60%" />
</div>


---

# Experiment

- Models: Vicuna 13B, LLaMA-Instruct 3.1 8B, LLaMA-Instruct 3.3 70B, DeepSeek-R1-Distill-LLaMA 8B.
- Task: MT-bench(multi-turn conversation), HumanEval(code generation), GSM8K(mathematical reasoning), Alpaca(instruction following), CNN/DM(summarization), 
- Metrics:
  - Speedup ratio
  - Average Accept Length $\\tau$
  - Acceptance Rate $n-\\alpha$
- Training dataset: ShareGPT & Ultra-Chat200k

---

# Experiment

<div class="flex justify-center">
  <img src="/image5.png" class="w-65%" />
</div>

---

# Experiment

<div class="grid grid-cols-2 gap-4">
  <img src="/image6.png" />
  <img src="/image8.png" />
</div>

---

# Ablation Study

<div class="flex justify-center">
  <img src="/image7.png" class="w-65%" />
</div>

---

# Conclusion

- **Problem**: Earlier speculative sampling methods like EAGLE-2 were fundamentally limited by a feature prediction [constraint]{color=red} that prevented performance from improving with more training data.

- **Solution**: EAGLE-3 overcomes this by introducing a [Training-Time Test (TTT)]{color=red} architecture for direct token prediction and using [multi-layer feature fusion]{color=red} for richer contextual input.

- **Experiment**: Comprehensive benchmarks confirmed state-of-the-art performance, achieving up to a [6.5x]{color=red} speedup and demonstrating a unique scaling law where more data yields better acceleration.


**EAGLE-3 continues to benefit from the augmentation of training data, achieving a maximum speedup of 6.5x.**

---

# Pros and Cons

<div class="grid grid-cols-2">
<div>

## Pros

- SOTA in speculative decoding
- Ready to use model and can be reproduced
- Framework supported

</div>
<div>

## Cons

- Long context failure
- No in-domain training dataset analyst

</div>
</div>

`,baseUrl:``,hasOgImage:!0},{id:`slides/page-attention`,path:`page-attention`,fullPath:`/home/runner/work/slides/slides/slides/page-attention/slides.md`,sourceDir:`/home/runner/work/slides/slides/slides`,frontmatter:{theme:`../../theme`,title:`Efficient Memory Management for Large Language Model Serving with PagedAttention`,name:`page-attention`,themeConfig:{glowHue:-30},addons:[`../addons/back-to-home`,`../addons/background-animation`,`../addons/page-number`]},content:`SOSP 2023

# **Efficient Memory Management for Large Language Model Serving with PagedAttention**

Woosuk Kwon, Zhuohan Li, Siyuan Zhuang, Ying Sheng, Lianmin Zheng, Cody Hao Yu, Joseph E. Gonzalez, Hao Zhang, Ion Stoica

Presenter: Jun-Chen Hung<br />
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
  - $a_{ij}=\\frac{exp(q_j^\\intercal k_t / \\sqrt{d})}{\\sum_{t=1}^iexp(q_i^\\intercal k_t / \\sqrt{d})}$
  - $o_{i}=\\displaystyle\\sum_{t=1}^ia_{ij}v_i$
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
  - Memory will become an increasingly significant bottleneck
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
  - $A_{ij}=\\frac{exp(q_i^\\intercal K_j / \\sqrt{d})}{\\sum_{t=1}^{[i/B]}exp(q_i^\\intercal K_t 1 / \\sqrt{d})}, A_ij = (a_{i,(j-1)B+1},...,a_{i,jB})$
  - $o_{i}=\\displaystyle\\sum_{t=1}^{[i/B]}V_jA_{ij}^\\intercal$
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

1. How to recover evicted blocks if needed again?
   - **Swapping**
     - Classic technique used by most virtual memory implementations
     - Selects a set of sequences to evict and transfer their KV cache to the CPU, and stop accepting new requests.
     - Bring back and continue the processing of that sequence.
   - **Recomputation**
     - Recompute the KV cache when the preempted sequences are rescheduled.
     - Recomputation latency can be significantly lower than the original latency because they are in the Sequence Group.

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
  - \`fork\`: Creates a new sequence from an existing one
  - \`append\`: Appends a new token to the sequence
  - \`delete\`: Deletes the sequence

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
    - Orca(Oracle): reserved space == \`MAX_LENGTH\`
- **Key metrics**: *normalized latency* of the system

<img src="/Experiment/Setup.png"  class="abs-tr top-24 right-5 w-96" />

<!--
- 13B, 66B: common size, 175B: GPT3
- shareGPT = 5.8x alpaca
-->

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

<!--
- Model: llama-13B => multilingual
- Dataset: WMT14

3.58倍

-->

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
    <img src="/Experiment/Ablation2.png" />
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
`,baseUrl:``,hasOgImage:!0}];var t=e;export{t as default,e as slidesData};