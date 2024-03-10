---
title: "**Computer Programming 2 Lab**"
layout: cover
transition: slide-left
download: true
mdc: true
hideInToc: true
lineNumbers: true
routerMode: hash
---

# Computer Programming 2 Lab

2023/03/29 Andy Hung

<div class="abs-br m-6 flex gap-2">
  <a href="https://slidev.andyjjrt.cc/1112cp2-lab4" target="_blank"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <bx-bxs-slideshow />
  </a>
</div>


---

# Outline

- HW 4
- Function in struct
- Using .h files

---
layout: image-right
image: https://memeprod.ap-south-1.linodeobjects.com/user-template/5f9161a843040f8e9231be6f5e175143.png
---

# HW4

### **Description**

There's some rumor that students will fry sweet potato balls in front of the NCCUCS
department office, which is untrue. In fact, students farm some normal potatoes. These potatoes
then get fried by themself and become potato balls, the process does not change the weight
of the potato (after frying a potato weight a, you get a potato ball with weight a). The
magical potatoes have magical effect on them, which is kept after frying. Now, you need to
fry two different types of potato balls in the same way.

---

# HW4

### **Input**

The first line gives a positive integer `N`, which is the rand seed.

### **Output**

Please print out informations if it runs to print.

---

# HW4

### **Input**

```sh
1
```

### **Output**

```sh
Potato:
  producer: Tom
  weight: 887
Potato Ball:
  producer: Tom
  weight: 384
```

---

# HW4

## What you need

```c
struct PotatoBall {
  struct PotatoProducer* producer;
  int weight;
  int magical;
  char effect[32];
  void (*print)(struct PotatoBall** potatoBall);
  void (*dtor)(struct PotatoBall** potatoBall);
};

struct Potato {
  struct PotatoProducer* producer;
  int weight;
  int magical;
  char effect[32];
  void (*print)(struct Potato** potato);
  struct PotatoBall* (*fry)(struct Potato** potato);
};
```

---

# HW4

## What you need

```c
struct PotatoProducer {
  char name[20];
  int magical;
  struct Potato* (*produce)(struct PotatoProducer* producer);
};

void init_potato_producer(struct PotatoProducer* producer, const char* name, int magical);
```

---
layout: image-right
image: https://img.league-funny.com/imgur/162477449659_n.jpg
---

# HW4

- Producer name may change
- Destroy itself when `fry` or `dtor
- Print detail of the potato/potato ball
- Magical effect will always be "slowness"
- Potato weight will be `(rand() % 1000) + 1`, which is an integer between 1 and 1000

---

# HW4

## Print Sample

```sh
Potato:
  producer: Tom
  weight: 95
Magical Potato:
  producer: Jane
  weight: 995
  effect: slowness
Potato Ball:
  producer: Tom
  weight: 95
Magical Potato Ball:
  producer: Jane
  weight: 995
  effect: slowness
```

---

# Function in struct

```c
struct test {
  void (*test_function)();
};

void this_is_test() {
  printf("Hello world");
}

// ...
test->test_function = this_is_test;

```

---

# Using .h files

```c {all|4}
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "potato.h"
```

<v-click>

- To prvent muti declaration

</v-click>

<v-click>

```c
// some_header_file.h
#ifndef SOME_HEADER_FILE_H
#define SOME_HEADER_FILE_H
// your code
#endif
```

</v-click>


---
layout: cover
---

## Thanks for listening

## Any Questions?
