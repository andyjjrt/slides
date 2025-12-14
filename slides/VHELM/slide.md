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
title: Welcome to Slidev
name: test
themeConfig:
  glowHue: 100
---

# VHELM: A Holistic Evaluation of Vision Language Models
Tony Lee, Haoqin Tu, Chi Heem Wong, Wenhao Zheng, Yiyang Zhou, Yifan Mai, Josselin Somerville Roberts, Michihiro Yasunaga, Huaxiu Yao, Cihang Xie, Percy Liang
<br /><br />
NeurIPS 2024


---

# Introduction

- Vision-Language Models (VLMs) are rapidly improving.
- Current benchmarks are **limited scoped** and **inconsistent in evaluation**.
- Presents VHELM, an extension of HELM.
  - Aggregates various datasets to cover one or more of the 9 aspects.
  - Standardize the inference flow to enable fair comparisons across models.
  - Living benchmark (https://crfm.stanford.edu/helm/vhelm/v2.0.1).

---

# Related work

- VLM benchmarks
- Holistic evaluation

---
layout: image-right
image: /Table_A1.png
backgroundSize: contain 
---

# VLM benchmarks

- Visual Question Answering (VQA)
  - Image type: real-world photographs, artworks, sketches
  - Domains: celebrity, landmark
  - Subjects: literature
  - Languages
  - Captioning
  - Generating codes
  - Simply text-generation

---

# Holistic evaluation

- HELM: Holistic Evaluation of Language Model

![](/HELM.png)

---

# Holistic evaluation

- HEIM: Holistic Evaluation of Text-to-Image Model (NeurIPS 2023)

![](/HEIM.png){width=70%}

---

# Problem

- In previous VLM benchmarks, each benchmark tests a limited, small set of models in their studies
- Evaluation protocols vary across studies

<img src="/Table_1.png" bg-white p-4 my-4 class="w-70%" />

---

# Solution

- **VHELM framework**
  - **Aspect**: Evaluative dimension
  - **Scenario**: Use case for VLM, identified by a **task** and a **usage category**. e.g. [Visual question answering]{color=red-500} on [medical images]{color=red-500}
  - **Adaption**: Procedure for invoking a model.
  - **Metrics**: How well a VLM performs on a scenario.

<div my-4 flex justify-center>
<img src="/VHELM.png" class="w-50%" />
</div>

---

# Aspects & Scenarios

- Visual perception: Interpreting information in the image
  - Image captioning
  - Visual-question answering

![](/aspects/visual_preception.png)

---

# Aspects & Scenarios

- Knowledge: Recalling facts or information contained in the VLM

![](/aspects/knowledge.png)

- Reasoning: Performing multiple steps of inference to arrive at the answer

![](/aspects/reasoning.png)

---

# Aspects & Scenarios

- Bias: Avoiding unwarranted associations between the input and output of the model

![](/aspects/bias.png)

![](/Figure_A2.png)

---

# Aspects & Scenarios

- Fairness: Counterfactual fairness (AAE) or performance disparity.

![](/aspects/fairness.png)

![](/aspects/fairness_aae.png){width=50%}

---

# Aspects & Scenarios

- Multilinguality: Performs the same task when the language is changed
  - Augment A-OKVQA by translating thequestions and answers from English to either Chinese, Hindi, Spanish, or Swahili
  - OCR
![](/aspects/multilinguality.png)


---

# Aspects & Scenarios

- Robustness: Producing desired answers under invariant perturbations of the input text (e.g., typos)
  - Add typos into A-OKVQA and VQAv2
  - Sketches and out-of-distribution images

![](/aspects/robustness.png)

---

# Aspects & Scenarios

- Toxicity: Identifying and avoiding offensive or damaging materials 

![](/aspects/toxicity.png)

- Safety: Refusing to produce answers that cause harm to humans

![](/aspects/safety.png)

---

# Metrics

- Adopt automated metrics for low-cost, fast, and consistent.
  - `Is this ___?` => `Answer the multiple choice question by just giving the letter of the correct answer. Is this ___? (a) Yes (b) No`
  - Open-ended answer: **Prometheus-Vision** score
    -  VLM that judges the similarity between the prediction and the ground truth on a scale of 1 (bad) to 5 (good)
  - Perspective API toxicity classifier for toxic aspect
- Average the score for each scenario
- Compute the [mean win rate]{color=red} on the main metrics when creating the overall leaderboard or ranking the models within an aspect.

---
layout: image-right
image: /Table_A2.png
backgroundSize: contain 
---

# Experiment

- Evaluated 22 recent model
- Each aspect with at most 1000 instances
- Completed at 2024/09/17

---

# Result

<img src="/evaluation/evaluation.png" class="w-80%" />

---

# Analysis

1. There is no model that **excels** across all scenarios

![](/evaluation/evaluation_1.png){width=70%}

---

# Analysis

2. Closed-API models significantly outperform open-weight ones.

![](/evaluation/evaluation_2.png){width=70%}

---

# Analysis

3. Open-weight models struggle to follow instructions.
4. VLMs refuse to follow harmful instructions. 

![](/evaluation/evaluation_4.png)

5. Detecting toxic content like memes is difficult. 
  - GPT-4V (61.3%) and GPT-4o (0513) (61.1%)

![](/evaluation/evaluation_5.png)

---

# Analysis

6. VLMs lack multilingual support.
  - At least 10% drop compared to original version.

![](/evaluation/evaluation_6.png)

---

# Analysis

7. Wide range of model performance on bias.

![](/evaluation/evaluation_7.png)

---

# Analysis

8. VLMs are not robust to distribution shifts.
  - Even GPT-4o falls short in the Unicorn sketch and OOD image (82.9%)

![](/evaluation/evaluation_8.png)

9. Models do well on the fairness scenarios.
  - No significant differences

---

# Conclusion

- VHELM assesses 9 important aspects for 22 well-known VLMs.
- Strive to keep this a living benchmark by adding more models and scenarios over time.

<div grid grid-cols-2 gap-4 mt-10 w-full>
<div>

## Pros
- Compare VLMs fairly
- Website keeps updating
- Framework can be extended if there's new Model / Aspect / Datasets

</div>
<div>

## Cons
- Some models which don't follow instructions are under estimated

</div>
</div>