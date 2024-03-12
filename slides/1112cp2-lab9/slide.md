---
title: "**Computer Programming 2 Lab**"
layout: cover
transition: slide-left
download: true
mdc: true
hideInToc: true
lineNumbers: true
routerMode: hash
addons:
  - slidev-addon-addon
---

# Computer Programming 2 Lab

2023/05/10 Andy Hung

<div class="abs-br m-6 flex gap-2">
  <a href="https://slidev.andyjjrt.cc/1112cp2-lab9" target="_blank"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <bx-bxs-slideshow />
  </a>
</div>

---

# Outline

- hw7
- Prefix, Infix & Suffix
- First contribution
- ex8

---

# hw7

- UVA 104
- [Google it](https://www.google.com/search?q=Arbitrage+uva)
- Try to understand others answers.
- When dealing with dp, write down each step.

---

# Prefix, Infix & Suffix

### **(1 + 2) * (3 + 4)**

| Type | Chinese | Expression |
|------|---------|------------|
| Prefix | 前序 | * + 1 2 + 3 4 |
| Infix | 中序 | (1 + 2) * (3 + 4) |
| Suffix | 後序 | 1 2 + 3 4 + * |

---

# Count 1 2 + 3 4 + * with Suffix

| Get | Stack |
|------|-----|
| 1 | 1 |
| 2 | 1 2 |
| + | 3 |
| 3 | 3 3 |
| 4 | 3 3 4 |
| + | 3 7 |
| * | 2 1 |


- ex: [四則運算計算機](https://oj.ebg.tw/problem/1092CP2_hw8)

---

# First contribution

- [First contribution](https://github.com/firstcontributions/first-contributions)
- Recommanded to experience flow of fork => checkout => add => commit => push => pr => merge

---

# ex5
<p></p>

Given a string `path`, which is an **absolute path** (starting with a slash `/`) to a file or directory in a Unix-style file system, convert it to the simplified **canonical path**.

In a Unix-style file system, a period `.` refers to the current directory, a double period `..` refers to the directory up a level, and any multiple consecutive slashes (i.e. `//`) are treated as a single slash `/`. For this problem, any other format of periods such as `...` are treated as file/directory names.

---

# ex5 - Input
<p></p>

 An absolute path.
- $1 \le path.length \le 3000$
- path consists of English letters, digits, period `.`, slash `/` or `_`.
- path is a valid absolute Unix path.

---

# ex5 - Output
<p></p>

The simplified **canonical path**.

The **canonical path** should have the following format:

- The path starts with a single slash `/`.
- Any two directories are separated by a single slash `/`.
- The path does not end with a trailing `/`.
- The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period `.` or double period `..`)

---

# ojtest

- [V2 website](https://ojtest.ebg.tw)
- Bug report in [issues](https://github.com/andyjjrt/ojFE/issues)
---
