---
_title: The Llama3 Herd of Models
addons:
  - slidev-addon-addon
---

# The Llama3 Herd of Models

Llama Team, AI @ Meta
<br />

Student: Jun-Chen Hung
<br />
Advisor: Wen-Chih Peng

2024/09/30

---

# Outline

- Introduction 
- Related Work 
- Problem 
- Solution
- Experiment 
- Conclusion
- References
- Q & A

<SlideCurrentNo class="absolute bottom-4 right-6" />

---

# Introduction

- The Llama 3 herd of models natively supports [multilinguality]{color=red}, [coding]{color=red}, [reasoning]{color=red}, and [tool usage]{color=red}.
- Processing information in a context window of up to [128K]{color=red} tokens.
- Seek to optimize for 3 levers in our development process:
  - Data: [15T]{color=red} multilingual tokens [(llama2 with 1.8T)]{color=gray500}
  - Scale: 
    - pre-trained using $3.8 × 10^{25}$ FLOPs [(50x more than llama2)]{color=gray500}
    - Train smaller models for [much longer]{color=red} than is compute-optimal.
  - Managing complexity
    - Opt for a standard dense Transformer model architecture, rather than MoE.
    - Simple post-training procedure based on SFT, RS, and DPO.

---

# Related Work

- **Scale**: [Scaling Laws](https://arxiv.org/abs/2001.08361).
- **Small models**: Compute-optimal v.s. [Distill larger models](https://arxiv.org/abs/2404.14219).
- **Architectures**: Dense Transformer v.s. [MoE](https://arxiv.org/abs/2401.04088).
- **Open source**: Mistral, Falcon, Gemma, Grok, OpenELM, Qwen etc.
- **Post-training**: Reject Sampling, Supervised Finetuning, Direct Preference Optimization.

---

# DPO - Direct Preference Optimization
![](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/pref_tuning/dpo.png)

- Rather than using [reward modeling]{color=red} and [reinforcement learning]{color=red}, DPO leverages a unique [parameterization reward]{color=red} functions to extract the optimal policy directly.

---

# Problem

- Embracing the open source
- Improve overall performance across core LLM capabilities such as [reasoning]{color=red} and [coding]{color=red}
- Multilingual [(llama3.1)]{color=gray500}
- Longer Context [(llama3.1)]{color=gray500}
- Multimodal [(llama3.2 11b & 90b)]{color=gray500}

---

# Solution

![](/llama3-training.png){width=70%}

---

# Pre-training - Data

- Knowledge-cutoff: the end of 2023
- Web Data Curation:
  - PII & safety filtering, Text extraction & cleaning, De-duplication, Heuristic filtering
  - Model-based quality filtering
    - Use `fasttext` to recognize if a given text would be referenced by Wikipedia.
    - [Roberta-based classifiers]{color=red} trained on [Llama 2]{color=orange} predictions.
  - Code and reasoning data
    - build domain-specific pipelines that extract code and math-relevant web pages.
    - [DistilRoberta models]{color=red} trained on web data annotated by [Llama 2]{color=orange}.
  - Multilingual data: `fasttext`-based model to categorize documents into 176 languages.

<!--
To train a quality classifier based on Llama 2, we create a training set of cleaned web documents, describe the quality requirements, and instruct Llama 2’s chat model to determine if the documents meets these requirements. We use DistilRoberta (Sanh et al., 2019) to generate quality scores for each document for efficiency reasons. We experimentally evaluate the efficacy of various quality filtering configurations.

Since the token distribution of code and math is substantially different than that of natural language, these pipelines implement domain-specific HTML extraction, customized text features and heuristics for filtering.
-->

---

# Pre-training - Data

- Annealing Data
  - Annealing on [small amounts]{color=red} of [high-quality]{color=red} code and mathematical data can [boost]{color=red} the performance of pre-trained models on key benchmarks
  - Annealing the learning rate of a 50% trained Llama 3 8B model linearly to 0 on 40B tokens, assign 30% weights to the new dataset and remaining 70% weight to the default data mix.
  - The improvements on the 405B model are [negligible]{color=red} => has strong in-context learning and reasoning capabilities

---

# Pre-training - Model

<div class="grid grid-cols-2 gap-8">
<div>

- Mostly follow llama2
- All models use GQA now [(34B and 70B only in llama2)]{color=gray500}
- Use attention mask between different document in the same sequence.
- 128k volcabulary size = 100k from `tiktoken` + 28k for non-English languages
- RoPE frequency increased to 500k => support longer context

</div>
<div>

![](/llama3-size.png)

</div>
</div>

<!--
[llama3 architecture](https://developer.volcengine.com/articles/7396884852433551379)
-->

---

# Pre-training - Scaling Rule

- the model size and the number of training tokens should be scaled equally.
- Target: 
  - Determine optimal model size.
  - Forcast flagship's model performance on downstream tasks
- Current issue:
  - Existing one use training loss rather than enchmark performance.
  - May be noisy and unreliable because of small compute budgets.

---

# Pre-training - Scaling Rule

- Accurately predict downstream benchmark performance:
  - Establish a correlation between [negative log-likelihood]{color=red} on down stream tasks and the [training FLOPs]{color=red}
  - Correlate the negative log-likelihood on downstream tasks with task accuracy with scaling law models and llama2 models.

![](/llama3-scaling-rule.png)

---

# Pre-training - Training Recipe

- Initinal pre-training
- long-context pre-training [800B tokens]{color=gray500}
  - Scaling up context window from [8k]{color=red} to [128k]{color=red} in 6 stagees
- Annealing [40M tokens]{color=gray500}
  - Linearly annealed the learning rate to 0
  - Compute the average of model checkpoints as the final pre-trained model.

---

# Post-training

![](/llama3-post-training.png)

Doing 6 rounds. In each cycle, collect new preference annotations and SFT data, sampling synthetic data from the [latest models]{color=red}.

---

# Post-training - Data

## **Prefrence Data**

- 4 levels: [significantly better]{color=green}, [better]{color=lime}, [slightly better]{color=yellow}, or [marginally better]{color=orange}.
- New `edit` field: further improve the preferred response.
- In each round: 
  - use all the preference data that is available for reward modeling.
  -  using the latest batches from various capabilities for DPO training
  - Only use [significantly better]{color=green}, [better]{color=lime} pairs.

![](/llama3-preference-data-statistics.png){width=60%}

---

# Post-training - Data

## **SFT Data**

- Prompts from our human annotation collection with rejection-sampled responses
- Synthetic data targeting specific capabilities
- Small amounts of human-curated data

![](/llama3-sft-data-statistics.png){width=95%}

---

# Post-training - Data

## **Quality Control**

- **Data cleaning**: a series of rule-based data removal
 and modification strategies to filter or clean problematic data. (e.g. emoji, `I’m sorry`, `I apologize`)
- **Topic classification**: Finetune Llama 3 8B into a topic classifier, classify all data into coarsely-grained and fine-grained buckets.
- **Quality scoring**: Obtain scores from reward model and Llama-based signals, select examples that are marked as high quality
- **Difficulty scoring**: Instag [(with lama3 70B)]{color=gray500} and Llama-based scoring
- **Semantic deduplication**: using RoBERTa to cluster dialogs and keep the ones that have maximum cosine similarity less than a threshold

---

# Post-training - Capabilities

- Code
- Multilinguality
- Math and Reasoning
- Long Context
- Tool Use
- Factuality
- Steerability

---

# Post-training - Code Capability

- Code Export: Continuing pre-training on a 1T token mix of mostly (>85%) code data.
  - Its SFT and DPO data mixes primarily targeting code.
  - Also use for reject sampling with coding prompts.
- Synthetic data generation
  - Execution feedback
  - Programming language translation
  - Backtranslation
- System prompt steering during rejection sampling.
- Filtering training data with execution and model-as-judge signals
  - code correctness and code style

<img src="/llama3-code-steering.png" class="w-96 absolute right-10 top-52" />

---

## **Synthetic data generation: Execution feedback**

![](/llama3-code.png){width=70%}

--- 

# Post-training - Multilingual Capability

- Multilingual Expert: continuing to pre-train on a data mix that consists of 90% multilingual tokens.
- Multilingual data collection:
  - Human annotations [(2.4%)]{color=gray500}
  - Data from other NLP tasks [(44.2%)]{color=gray500}
  - Rejection sampled data [(18.8%)]{color=gray500}
  - Translated reasoning data [(34.6%)]{color=gray500}

---

# Post-training - Math and Reasoning

- Challanges
  - Lack of prompts
    - Convert mathematical context to QA format for SFT
  - Lack of ground truth chain of thought
    - Generate step-by-step solutions for a set of prompts and self-verification
  - Incorrect intermediate steps
    - Use step-wise reward models to filter
  - Teaching models to use external tools
    - Prompt llama3 to solve problems using textual reasoning and associated Python code
  - Discrepancy between training and inference