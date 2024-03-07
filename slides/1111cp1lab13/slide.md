---
title: '**Computer Programming 1 Lab**'
download: true
layout: cover
mdc: true
hideInToc: true
lineNumbers: true
routerMode: hash
---

# Computer Programming 1 Lab
2022/12/29 Andy Hung

<div class="abs-br m-6 flex gap-2">
  <a href="https://slidev.andyjjrt.cc/1111cp1-lab13" target="_blank"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <bx-bxs-slideshow />
  </a>
</div>

---

# Outine

- Link list
- Debug

---

# Linked List

```c
typedef struct node Node;

struct node {
  int value;
  Node* nextPtr;
}

```

<v-click>

- other concept
- insert
- delete
- remove

</v-click>

---

# Linked List - other concept

<div class="flex flex-col gap-20 py-10">
  <LinkList :values="['1', '2', '3', '4', '5']" />
  <LinkList :values="['-1', '1', '2', '3', '4', '5']" highlight="-1" />
</div>

Use a dummy header to avoid strange pointer problem

---

# Linked List - insert

<div class="flex flex-col gap-20 py-10">
  <LinkList :values="['1', '2', '3', '5']" />
  <LinkList :values="['1', '2', '3', '4', '5']" highlight="4" />
</div>

<v-click>

```c{all|3,4}
Node* newPtr = malloc(sizeof(Node));
newPtr -> value = 0;
newPtr -> nextPtr = currPtr -> nextPtr;
currPtr -> nextPtr = newPtr;
```

</v-click>

---

# Linked List - delete

<div class="flex flex-col gap-20 py-10">
<LinkList :values="['1', '2', '3', '4', '5']" highlight="4" />
  <LinkList :values="['1', '2', '3', '5']" />
</div>

<v-click>

```c
Node* tmpPtr = currPtr -> nextPtr;
currPtr -> nextPtr = tmpPtr -> nextPtr;
free(tmpPtr);
```

</v-click>

---

# Linked List - remove

```c
while(ptr != NULL) {
  Node* nextPtr = ptr -> nextPtr;
  free(ptr);
  ptr = nextPtr;
}
```

Whenever use malloc, use free then.

---

# Debug
- **IO** first, then **Logic**
  - 避免有時候邏輯寫完發現input根本就是錯的。
  - 處理IO時，處理一個程序print一次，循序漸進。

<v-click>

- TLE
  - 某個while沒檢查到，ex: recursive, i--
  - 用斷點 `while(1)` 丟oj

</v-click>
<v-click>

- Segmentation fault
  - array index錯誤存取，link list存取 `NULL` 的 `nextPtr` 
  - 費神，用以上方法逐步排解

</v-click>
<v-click>

- Stack Overflow
  - 遞迴過深，檢查終止條件
  
</v-click>

---

# Debug

- array 開不起來
  - Stack vs heap
  - 用`malloc`或用全域變數

<v-click>

- local vs ghost vs oj
  - gcc version
  - `llvm` vs `gcc`

</v-click>

---

# Debug friend - GDB

- Vscode instruction: [WSL setup](https://code.visualstudio.com/docs/cpp/config-wsl#_customize-debugging-with-launchjson)
- You can also use `gdb` command: [GeekForGeeks](https://www.geeksforgeeks.org/gdb-command-in-linux-with-examples/).
- Other platforms have other good tools.

---
layout: center
---

## No exercise this year

---
layout: end
---




