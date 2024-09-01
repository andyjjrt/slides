---
_title: Summer School Week6
addons:
  - slidev-addon-addon
---

# Summer School Week6

洪晙宸

---
layout: cover
---

# Retrieval and Retrieval Augmented Generation


---

# Problem with standard prompting

- Accuracy issues:
  - **Knowledge cutoffs**: parameters are usually only updated to a particular time
  - **Private data**: data stored in private text or data repositories not suitable for training
  - **Learning failures**: even for data that the model was trained on, it might not be sufficient to get the right answer
- Verifiability issues: It is hard to tell if the answer is correct

---

# RAG

![](/RAG.png){width=90%}

- Retrieve relevant passages efficiently
- Read the passages to answer the query

---

# Retrieval

- Sparse retrieval
- Document-level dense retrieval
- Token-level dense retrieval
- Cross-encoder reranking
- Black-box retrieval(ask Google)

---

# Sparse Retrieval

- Some terms are more important than others => **Low-frequency words** are often more important
- Term Frequency - In-Document Frequency (TFIDF)
  ![](/TFIDF.png){width=70%}
- BM25: TF term similar to smoothed count-based LMS
  ![](/BM25.png){width=70%}

---

# Dense Retrieval

- Encode document/query and find nearest neighbor 
- Using
  - Out-of-box embeddings
  - Learned embeddings
    - Select positive and negative documents, train using a contrastive loss (e.g. hinge loss). ex: DPR, Contriever
    ![](/LearningEmbedding.png)

---

# Cross-encoder Ranking

- Jointly encode both queries and documents using neural model

  ![](/CrossEncoderRanking.png){width=70%}

- Precludes ANN lookup, so can only be used on small number of candidates

---

# Token-level Dense Retrieval

- **ColBERT** use contextual representations of all query and document tokens to compute retrieval score.

  ![](/Token-levelDenseRetrieval.png){width=50%}

- Significantly more effective (but more costly) than single-vector retrieval

---

# Hypothetical Document Embeddings

- Generate a **hypothetical document** for the query using an LLM, and try to look it up
- Can be easier than trying to match under-specified query
- But it needs more genertion time

![](/HypotheticalDocumentEmbeddings.png)

---
layout: cover
---

# Retriever-Reader Model

---

# Simple Implement

- Simply add passage in prompt

![](/RAG.png)

---

# Retriever + Generator End to End Training

- Train the retriever and reader to improve accuracy
  - **Reader**: Maximize generation likelihood given single retrieved document
  - **Retriever**: Maximize overall likelihood by optimizing mixture weights over documents 
- Problem: search index becomes stale

![](/E-ERAG.png){width=70%}

---

# When retrieve

- Once, before generate: used by most
- Several times during generation, as necessary
  - Trigger retrieval with specific token, ex: `WikiSearch(...)`
  - Trigger retrieval when uncertainly: `FLARE` trie to generate, and retrieve when LM certainly is low
- Every token

<div class="grid grid-cols-2 gap-4 ml-6">

  - Token-level softmax modification: `KNN-LM` retrieves similar examples, and uses the following token from them
  - Token-level Approximate Attention

  ![](/Token-levelApproximateAttention.png)

</div>

---
layout: cover
---

# Long Context Transformer

---

# Training Transformer over longer sequences

- Simply use all previous wrds in document
  - But the computation is quadratic in sequence length
- In RNN, we can truncate backdrop
- In Transformer-XL, we can use the previous state but not backprop them. Or `sliding window attention` in Mistral
- In sparse transformer, Added `stride`, only attending to every n previous states

---

# Low-rank Approximation

- Project matrix to lower dimension to avoid heavy computation

![](/Low-Rank.png)

---

# Effectively Using Long Contexts

- As context increase, the model pay less attention to things in the middle of the context

- Ensuring Use of Relevant Context: distill content

---

# RAG demo

- This is my own project, which use RAG to generate a class schedule.

![](https://private-user-images.githubusercontent.com/74034659/292723560-ac8269dc-1765-48f6-a1bd-fcd8fc09a383.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjUxOTg2MjEsIm5iZiI6MTcyNTE5ODMyMSwicGF0aCI6Ii83NDAzNDY1OS8yOTI3MjM1NjAtYWM4MjY5ZGMtMTc2NS00OGY2LWExYmQtZmNkOGZjMDlhMzgzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTAxVDEzNDUyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM0OTk0NGYzNmUyMjc4MzZkOTQ2M2U5ZDMwYzU3MTA1MmIwMzZhYWNmMDcyNzI3MGM1MTlmZmE0MDZjOWU4MzUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.UXg1mmokIUP_L7TyepJ4TBnZ6gxZzkX4GjqthU006Cs){width=60%}
