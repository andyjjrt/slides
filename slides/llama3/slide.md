---
_title: The Llama3 Herd of Models
themeConfig:
  primary: '#9fd9f5'
  primary-dark: '#09384f'
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
- Appendix
- Q & A

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---
layout: cover
---

# Introduction

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

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

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---
layout: cover
---

# Related Work

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Related Work

- **Scale**: [Scaling Laws](https://arxiv.org/abs/2001.08361).
- **Small models**: Compute-optimal v.s. [Distill larger models](https://arxiv.org/abs/2404.14219).
- **Architectures**: Dense Transformer v.s. [MoE](https://arxiv.org/abs/2401.04088).
- **Open source**: Mistral, Falcon, Gemma, Grok, OpenELM, Qwen etc.
- **Post-training**: Reject Sampling, Supervised Finetuning, Direct Preference Optimization.

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# DPO - Direct Preference Optimization
![](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/pref_tuning/dpo.png)

- Rather than using [reward modeling]{color=red} and [reinforcement learning]{color=red}, DPO leverages a unique [parameterization reward]{color=red} functions to extract the optimal policy directly.

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---
layout: cover
---

# Problem

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Problem

- Embracing the open source
- Improve overall performance across core LLM capabilities such as [reasoning]{color=red} and [coding]{color=red}
- Multilingual [(llama3.1)]{color=gray500}
- Longer Context [(llama3.1)]{color=gray500}
- Multimodal [(llama3.2 11b & 90b)]{color=gray500}

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---
layout: cover
---

# Solution

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Solution

![](/llama3-training.png){width=70%}

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Pre-training - Data

- Knowledge-cutoff: the end of 2023
- Web Data Curation:
  - PII & safety filtering, Text extraction & cleaning, De-duplication, Heuristic filtering
  - Model-based quality filtering
    - Use `fasttext` to recognize if a given text would be referenced by Wikipedia.
    - [Roberta-based classifiers]{color=red} trained on [Llama 2]{color=orange} predictions.
  - Code and reasoning data
    - Build domain-specific pipelines that extract code and math-relevant web pages.
    - [DistilRoberta models]{color=red} trained on web data annotated by [Llama 2]{color=orange}.
  - Multilingual data: `fasttext`-based model to categorize documents into 176 languages.

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

<!--
Model-base和Code data都是由llama2產生的資料集所訓練的classifier
-->
---

# Pre-training - Data

- Annealing Data
  - Annealing on [small amounts]{color=red} of [high-quality]{color=red} code and mathematical data can [boost]{color=red} the performance of pre-trained models on key benchmarks
  - Annealing the learning rate of a 50% trained Llama 3 8B model linearly to 0 on 40B tokens, assign 30% weights to the new dataset and remaining 70% weight to the default data mix.
  - The improvements on the 405B model are [negligible]{color=red} => has strong in-context learning and reasoning capabilities

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

<!--
少量的高品質資料可以助於提升模型能力
在405B的模型上效果不顯著，證明他的ICL能力足夠
-->
---

# Pre-training - Model

<div class="grid grid-cols-2 gap-8">
<div>

- Mostly follow llama2
- All models use GQA now [(34B and 70B only in llama2)]{color=gray500} => Improve performance.
- Use attention mask between different document in the same sequence. => Avoid impact on very long context.
- 128k volcabulary size = 100k from `tiktoken` + 28k for non-English languages
- RoPE frequency increased to 500k => support longer context

</div>
<div>

![](/llama3-size.png)

</div>
</div>

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

<!--
[llama3 architecture](https://developer.volcengine.com/articles/7396884852433551379)
-->

---

# Pre-training - Scaling Rule

- Determine optimal modal size given pre-training compute budget.
- The model size and the number of training tokens should be scaled equally.
- Target: 
  - Determine optimal model size.
  - Forcast flagship's model performance on downstream tasks
- Current issue:
  - Existing one use training loss rather than [benchmark performance]{color=red}.
  - May be [noisy]{color=red} and [unreliable]{color=red} because of small compute budgets.

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Pre-training - Scaling Rule

- Establish a correlation between [negative log-likelihood]{color=red} on down stream tasks and the [training FLOPs]{color=red}
  - Given $3.8 * 10^{25}$ FLOPs suggests [402B]{color=red} parameters and [16.55T]{color=red} tokens.
- Correlate the negative log-likelihood on downstream tasks with task accuracy with scaling law models and llama2 models.

![](/llama3-scaling-rule.png)

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

<!--
1. 透過不同實驗組合畫出圖，對於每個compute budget套用一個一元二次方程式算出最低點 => compute-optimal
1.1. Model size & Training Token 的效益會逐漸降低
2. 映射點到一條回歸線(原始Scaling rule)，得出 (α,A) = (0.53,0.29)
3, 4. 透過ARC Challenge benchmark來推估flagship model的表現，最後證明事實的確如此
-->
---

# Pre-training - Training Recipe

- Initinal pre-training
- long-context pre-training [800B tokens]{color=gray500}
  - Scaling up context window from [8k]{color=red} to [128k]{color=red} in 6 stagees
- Annealing [40M tokens]{color=gray500}
  - Linearly annealed the learning rate to 0
  - Compute the average of model checkpoints as the final pre-trained model.

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Post-training

![](/llama3-post-training.png)

Doing 6 rounds. In each cycle, collect new preference annotations and SFT data, sampling synthetic data from the [latest models]{color=red}.

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Post-training - Data

## **Prefrence Data**

- 4 levels: [significantly better]{color=green}, [better]{color=lime}, [slightly better]{color=yellow}, or [marginally better]{color=orange}.
- New `edit` field: further improve the preferred response.
- In each round: 
  - Use all the preference data that is available for reward modeling.
  - Using the latest batches from various capabilities for DPO training
  - Only use [significantly better]{color=green}, [better]{color=lime} pairs.

![](/llama3-preference-data-statistics.png){width=60%}

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Post-training - Data

## **SFT Data**

- Prompts from our human annotation collection with rejection-sampled responses
- Synthetic data targeting specific capabilities
- Small amounts of human-curated data

![](/llama3-sft-data-statistics.png){width=95%}

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Post-training - Data

## **Quality Control**

- **Data cleaning**: A series of [rule-based]{color=red} data removal and modification strategies to filter or clean problematic data. (e.g. emoji, `I’m sorry`, `I apologize`)
- **Topic classification**: Finetune Llama 3 8B into a [topic classifier]{color=red}, classify all data into coarsely-grained and fine-grained buckets.
- **Quality scoring**: Obtain scores from reward model and Llama-based signals, select examples that are marked as high quality
- **Difficulty scoring**: Instag [(with lama3 70B)]{color=gray500} and Llama-based scoring
- **Semantic deduplication**: Use RoBERTa to cluster dialogs and keep the ones that have maximum cosine similarity less than a threshold

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Post-training - Capabilities

- Code
- Multilinguality
- Math and Reasoning
- Long Context
- Tool Use
- Factuality
- Steerability

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Post-training - Code Capability

- **Code Export**: Continuing pre-training on a 1T token mix of mostly (>85%) code data.
  - Its SFT and DPO data mixes primarily targeting code.
  - Also use for reject sampling with coding prompts.
- Synthetic data generation
  - Execution feedback
  - Programming language translation
  - Backtranslation
- System prompt steering during rejection sampling.
- Filtering training data with execution and model-as-judge signals
  - Filter with [Code correctness]{color=red} and [Code style]{color=red}
  - Revised most challenging data until they pass "model-as-judge"

<img src="/llama3-code-steering.png" class="w-96 absolute right-10 top-52" />

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

## **Synthetic data generation: Execution feedback**

![](/llama3-code.png){width=70%}

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

--- 

# Post-training - Multilinguality Capability

- Multilingual Expert: continuing to pre-train on a data mix that consists of 90% multilingual tokens.
- Multilingual data collection:
  - Human annotations [(2.4%)]{color=gray500}
  - Data from other NLP tasks [(44.2%)]{color=gray500}
  - Rejection sampled data [(18.8%)]{color=gray500}
  - Translated reasoning data [(34.6%)]{color=gray500}

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Post-training - Math and Reasoning

Some Challanges:
- **Lack of prompts**
  - Convert mathematical context to QA format for SFT.
- **Lack of ground truth chain of thought**
  - Generate step-by-step solutions for a set of prompts and self-verification.
- **Incorrect intermediate steps**
  - Use step-wise reward models to filter.
- **Teaching models to use external tools**
  - Prompt llama3 to solve problems using textual reasoning and associated Python code.
- **Discrepancy between training and inference**
  - Perform error correction by prompting Llama 3 to yield correct generations.

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Post-training - Long Context Capability

<div class="grid grid-cols-2 gap-8">
<div>

- SFT and synthetic data generation:
  - Question answering
  - Summarization
  - Long context code reasoning
- Mixing 0.1% of above data get best performance in short-context and long-context.
- Doesn't really impact DPO.

</div>
<div>

![](/llama3-long-context.png){width=85%}

</div>
</div>


<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Post-training - Tool Use Capability

- Enhance tool use and zero-shot tool use
- Implement: Python object with different methods
- Tool data

<img src="/llama3-tool-use-data.png" class="w-3/5 mx-6 mt-2" />

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Post-training - Tool Use Capability

- Zero-shot tool data
  - **Single, nested, and parallel function calling**: Use llama3 to generate a natural language query corresponding to the function call from [Stack](https://arxiv.org/abs/2211.15533).
  - **Multi-turn function calling**: Multiple agents [(llama 3)]{color=gray500} that generate domains, APIs, user queries, API calls, and responses

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Post-training - Factuality Capability

- Principle: Know what it knows

![](/llama3-factuality.png)

- Also collect a limited set of labeled factuality data that deals with sensitive topics where factually contradictory or incorrect statements are prevalent.

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Post-training - Steerability Capability

- Enhance through natural language instructions

![](/llama3-steerability.png)

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---
layout: cover
---

# Experiment

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Experiment - Overall benchmark

<div class="flex justify-center">
  <img src="/llama3-benchmark.png" class="w-4/5" />
</div>

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Experiment - Exam benchmark

<div class="flex justify-center">
  <img src="/llama3-benchmark-exam.png" class="w-[65%]" />
</div>

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Experiment - Code benchmark

<div class="flex justify-center">
  <img src="/llama3-benchmark-code.png" class="w-3/4" />
</div>

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Experiment - Multilingual benchmark

<div class="flex justify-center">
  <img src="/llama3-benchmark-multilingual.png" class="w-1/2" />
</div>

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Experiment - Long-Context benchmark

<div class="flex justify-center">
  <img src="/llama3-benchmark-long-context.png" class="w-4/5" />
</div>

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Experiment - Tool benchmark

<div class="flex justify-center">
  <img src="/llama3-benchmark-zero-shot-tool.png" class="w-3/5" />
</div>

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Experiment - Human Evaluation benchmark

<div class="flex justify-center">
  <img src="/llama3-benchmark-human-eval-code.png" class="w-9/10" />
</div>

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Experiment - Human Evaluation benchmark

<div class="flex justify-center">
  <img src="/llama3-benchmark-human-eval.png" class="w-9/10" />
</div>


<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---
layout: cover
---

# Conclusion

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Conclusion

- Problem:
  - Embracing the open source
  - Improve overall performance across core LLM capabilities such as [reasoning]{color=red} and [coding]{color=red}
  - Multilingual, Longer Context [(llama3.1)]{color=gray500}
  - Multimodal [(llama3.2 11b & 90b)]{color=gray500}
- Solution:
  - Use dense Transformer like Llama family.
  - Use SFT & DPO in post-training.
  - Use a lot of synthetic data in post-training.
- Experiment:
  - Flagship model is very competitive with leading industry models, making it the best-performing openly available model.

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Conclusion

<div class="flex flex-col items-center">
  <img src="/MMLU-date.png" class="w-[65%]" />

  [@maximelabonne](https://x.com/maximelabonne)

</div>



<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Conclusion

<div class="grid grid-cols-2">
<div>

## [Pros]{color=green}

- Use scaling law to predict flagship model performance.
- Having long context window.
- Close the gap between closed-source and open-weight models.

</div>
<div>

## [Cons]{color=red}

- No multimodal support yet

</div>
</div>

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---

# Appendix

- Training Infrastructure
- Vision Experiments
- Speech Experiments

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />

---
layout: cover
---

# Q & A

<SlideCurrentNo class="absolute bottom-4 right-6 text-sm text-gray-400" />
