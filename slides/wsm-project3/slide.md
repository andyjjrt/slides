---
theme: andyjjrt
transition: slide-left
title: WSM-Project3
download: true
mdc: true
hideInToc: true
lineNumbers: true
layout: cover
url: https://slidev.andyjjrt.cc/wsm-project3
---

# WSM-Project3
109703040洪晙宸<br />109703054 莊維軒

---
hideInToc: true
---

# TOC

<Toc />

---
layout: cover
---

# TFIDF

---
hideInToc: true
clicks: 2
---

# TFIDF

- Port project1's code
```py{all|7|all}
# Build dimension dictionary, indicates key's index
index = 0
for word in self.parser.parse(" ".join([doc["doc"] for doc in docs]), language):
  if word not in self.dimensions:
    self.dimensions[word] = index
    index += 1
self.tf = np.zeros((len(docs), len(self.dimensions)))

# Count tf, df, idf, and tfidf by using numpy functions, and store them for further usage.
for i, doc in enumerate(tqdm.tqdm(docs, postfix="Building Index")):
  processedDoc = self.parser.parse(doc["doc"], language)
  doc["parsed"] = processedDoc
  for word in processedDoc:
    self.tf[i][self.dimensions[word]] += 1
```

<div v-click="2">

14k sessions * 1m songs = 140,000,000,000 `ints`/`shorts`/`bit`

</div>

---
layout: cover
---

# ItemCF

---
hideInToc: true
---

# ItemCF

## **Concept**

Predict user preferences based on <span class="text-red">user's historical behavior</span>, instead of <span class="text-red">attributes of the item</span>.

## **Formula**

- Basic

$W_{\mu v} = \dfrac{\mid N(\mu) \cap N(v) \mid}{\mid N(\mu) \mid}$

- Adding penalty term

$W_{\mu v} = \dfrac{\mid N(\mu) \cap N(v) \mid}{\sqrt{\mid N(\mu) \mid \mid N(v) \mid}}$

---
hideInToc: true
---

# ItemCF

## **Implementation**

<v-clicks>

- Use `dict` to create co-occurance matrix.
  ![](/itemcf-occurance.png)
- Do cosine similarity search based on the matrix 
- Randomly fill with top 20 songs if recommendation less than 5 songs.
- <div><span class="bg-[#19a84b] p-1 px-2 rounded font-bold">Basic Score: 0.14537</span></div>

</v-clicks>


<style>
  img {
    @apply rounded h-50 mb-3
  }
</style>

---
hideInToc: true
---

# ItemCF

## **Consider Listening Time**

<v-clicks>

- Give weights based on listening time.
- Use `unix_played_at` to get listening time.
  <div class="flex items-center py-2">
    <div class="h-10 w-20 rounded bg-purple flex items-center justify-center p-2">song1</div>
    <div class="h-10 w-20 flex items-center justify-center p-2 text-sm"><-diff-></div>
    <div class="h-10 w-20 rounded bg-purple flex items-center justify-center p-2">song2</div>
    <div class="h-10 w-20 flex items-center justify-center p-2 text-sm"><-diff-></div>
    <div class="h-10 w-20 rounded bg-purple flex items-center justify-center p-2">song3</div>
  </div>
- Our weight:
  - \< 10 sec: 0.1
  - 11 ~ 150 sec: 0.7
  - \> 150 sec: 1
- <div><span class="bg-red p-1 px-2 rounded font-bold">Score: 0.10981</span> (worse)</div>

</v-clicks>

---
hideInToc: true
---

# ItemCF

## **Consider Repeat Time**

<v-clicks>

- If <span class="text-red">last 3 songs are the same song</span> or more than <span class="text-red">8 repeated songs among top 20 songs</span> 
  - Recommend the same song 5 times
- <div><span class="bg-red p-1 px-2 rounded font-bold">Score: 0.12708</span> (worse)</div>

</v-clicks>

---
hideInToc: true
---

# ItemCF

## **Conclusion**

<v-click>

### Listening Time

- \< 10 sec: 0.1, 11 ~ 150 sec: 0.7, \> 150 sec: 1 => <span class="bg-red px-2 rounded font-bold">Score: 0.10981</span>
- \< 10 sec: 0.1, \> 11 sec: 1 => <span class="bg-red px-2 rounded font-bold">Score: 0.115</span>
- Predict what KKbox predicts, instead of what the user would like.

</v-click>

<v-click>

### Repeat Time

- more than 8 repeated songs among top 20 songs => <span class="bg-red px-2 rounded font-bold">Score: 0.12708</span>
- more than 20 repeated songs among top 20 songs  => <span class="bg-red px-2 rounded font-bold">Score: 0.12755</span>
- Rating Criteria: Recommend a variety of unique songs get higher scores.

</v-click>




<style>
h3 {
  @apply mt-4 font-bold
}

</style>

---
layout: cover
---

# N-Gram

---
hideInToc: true
---

# N-Gram

## **Prepare Data**

- Join tables together for furthur usage
![](/ngram-prepare-data.png)

<div v-click>

- Trigram

```py
n = 3
train_data, padded_sents = padded_everygram_pipeline(n, allWords)
```

</div>

<style>
  img {
    @apply rounded
  }
</style>

---
hideInToc: true
clicks: 3
---
# N-Gram

## **model.score**

```py{all|3}
result = list(model.score(words[-2:]))
result = [r for r in result if r[0] != "<s>" and r[0] != "</s>"]
result.sort(key=lambda x: x[1])
length = len(result)
return  [session_id] + result[:5]
```

<img src="/ngram-firsttry.jpg" v-click="2" class="rounded mb-1" />

<v-click>

- 12hr per run with 22 threads, <span class="bg-[#19a84b] p-1 px-2 rounded font-bold">Basic Score: 0.20894</span>

</v-click>


---
hideInToc: true
clicks: 5
---
# N-Gram

## **model.count**

```py{all|7|12|1|4|all}
if words[-1] == words[-2]: return [session_id] + [songIdMapping[words[-1]]] * 5
result = list(model.counts[words[-2:]].items())
result = [r for r in result if r[0] != "<s>" and r[0] != "</s>"]
result.sort(key=lambda x: x[1])
length = len(result)
if length >= 5:
  return  [session_id] + [songIdMapping[r[0]] for r in result[:5]]
else:
  tmp = [songIdMapping[r[0]] for r in result]
  for i in range(5 - len(tmp)):
    tmp.append(random.choice(list(songIdMapping.items()))[1])
  return  [session_id] + tmp
```

<div v-click="5">

- 6hr per run with 22 threads, 30% replacement to <span class="bg-[#19a84b] p-1 px-2 rounded font-bold">0.22006</span>

</div>

---
hideInToc: true
---
# N-Gram

## **What we should do**

<v-clicks>

- Randomly choose songs from same `genre`, `titletext`, etc.
- Use `model.generate()` instead.
- Try 4-gram.
- Reciprocal Rank Fusion
  $$
  RRFScore(d \isin D) = \sum_{\mathclap{r \isin R}} \dfrac{1}{k+r(d)}, k = 60
  $$
- Data validation (important).

</v-clicks>

---
layout: cover
---
# Discussions & Feedbacks

---
hideInToc: true
---
# Discussions & Feedbacks

- Data validation 
![](/ngram-wrongdata.jpg){class=rounded}

  ```py
  for i in tqdm.tqdm(range(recordLength)):
    words = list()
    for j in range(25):
      words.append(recordTable.loc[i*25 + j, "song_id"])
    allWords.append(words)
  ```

---
layout: cover
hideInToc: true
---
# Thanks for listening