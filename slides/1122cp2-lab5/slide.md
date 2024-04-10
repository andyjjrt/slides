---
_title: "Computer Programming 2 Lab"
themeConfig:
  primary: '#9ec3ff'
  primary-dark: '#16448c'
addons:
  - slidev-addon-addon
---

# Computer Programming 2

2024/04/10 Andy Hung

---

# Outline

- HW04 solution
- Midterm Review
  - `malloc`
  - Linked List
  - Function Pointer

---

# HW04


<div class="h-[400px] pr-1 overflow-y-scroll">

```c
#include <stdio.h>
#include <stdlib.h>

struct Program{
    int start;
    int end;
};
typedef struct Program Program;

int cmp(const void* a, const void* b) {
    Program* programA = (Program*)a;
    Program* programB = (Program*)b;
    return programA->end - programB->end;
}

int main() {
    int N;
    scanf("%d", &N);

    Program* programs = malloc(N * sizeof(Program));

    for (int i = 0; i < N; i++) {
        scanf("%d %d\n", &programs[i].start, &programs[i].end);
    }

    qsort(programs, N, sizeof(Program), cmp);

    int endTime = 0;
    int count = 0;
    for (int i = 0; i < N; i++) {
        if (programs[i].start > endTime) {
            endTime = programs[i].end;
            count++;
        }
    }

    printf("%d\n", count);

    free(programs);

    return 0;
}
```

</div>

---

# Midterm Review

## `malloc`

```c
// ptr = (cast-type*) malloc(byte-size)

// Create an int array of size 10
int* ptr = malloc(sizeof(int) * 10)
```

- Allocate memory in **heap**{color=red}.
- Remember to free if you dont't need it anymore.

---

# Midterm Review

## Linked List

```c
typedef struct node Node;

struct node {
  int value;
  Node* nextPtr;
}

```

<v-click>

- Other Concept
- Insert
- Delete
- Remove

</v-click>

---

# Midterm Review

## Linked List - Other Concept

<div class="flex flex-col gap-20 py-10">
  <LinkList :values="['1', '2', '3', '4', '5']" />
  <LinkList :values="['-1', '1', '2', '3', '4', '5']" highlight="-1" />
</div>

Use a dummy header to avoid strange pointer problem

---

# Midterm Review

## Linked List - Insert

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

# Midterm Review

## Linked List - Delete

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

# Midterm Review

## Linked List - Remove

```c
while(ptr != NULL) {
  Node* nextPtr = ptr -> nextPtr;
  free(ptr);
  ptr = nextPtr;
}
```

When using `malloc`, use `free` when not used.


---

# Midterm Review

## Function Pointer

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

An alternative solution of oop in C (very basic version)

---

# Midterm Review

## What else

- CP1 and CP2
- Slides
- <span v-mark.circle.red>Labs</span>

--- 
layout: cover
---

# Thanks for listening