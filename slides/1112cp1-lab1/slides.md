---
title: '**Computer Programming 2 Lab**'
download: true
layout: cover
transition: slide-left
download: true
mdc: true
hideInToc: true
lineNumbers: true
routerMode: hash
---

# Computer Programming 2 Lab
2023/02/22 Andy Hung

<div class="abs-br m-6 flex gap-2">
  <a href="https://slidev.andyjjrt.cc/1112cp2-lab1" target="_blank"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <bx-bxs-slideshow />
  </a>
</div>

---

# Outline

- HW 1
- From C to C++
- WSL

---
transition: fade
---
# HW1

### **Description**
Last semester, in HW6, you helped Tom convert the time code, and he was very grateful. However, he now has a new problem.

When Tom is searching for courses, he adds courses that he is interested in to his trace list. However, he is having difficulty resolving conflicts when he has to choose the order in which to take the courses.

---
transition: fade
---

# HW1

<img src="https://oj.ebg.tw/public/upload/87db303baa.png" style="margin-left: auto; margin-right: auto; width: 700px" class="rounded-sm" />

In the above situation, the courses `金融，理財與生活` and `俄國文化與社會` have 2 hours of overlap (78), which is considered a **conflict**. Please help Tom count the number of conflicts he has.

<style scoped>

[layout="image-right"] .w-full {
  @apply !bg-contain
}

</style>

---
transition: fade
---

# HW1

## Input

The first line contains a positive integer $N$, which represents the number of classes.

For each class, the first line provides the `session count` and `course ID`, and the second line provides the `weekday`, `start time`, and `end time`.

Constraints:

- N ≤ 10 
- 1 ≤ session count ≤ 4
- |course ID| = 9
- 1 ≤ weekday ≤ 7
- 6 ≤ start time ≤ 21
- 7 ≤ end time ≤ 22

---
transition: fade
---

# HW1

## Output

Please print out how many conflict Tom has.

---
layout: image-right

image: schedule.png
---

# HW1

### Input

```sh
4
1 002347001
1, 8, 10
1 002374001
3, 10, 12
1 042002001
1, 16, 19
1 044022001
1, 16, 18
```

### Output

```sh
1
```

---

# From C to C++: Hello World

```cpp{all|2}
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}
```

<v-clicks>

- **A namespace** is a declarative region that provides a scope to the identifiers (the names of types, functions, variables, etc) inside it.
- All C++ standard library types and functions are declared in the std namespace or namespaces nested inside std.
- No `.h` in `#include` most of the time.

</v-clicks>

---

# From C to C++: I/O

- \<iostream\> includes commonly used `cin`, `cout`, `endl`.
- `cin` will read variables you defined automatically.
- `while(scanf(...) != EOf)` ==== `while(cin >> a)`

```cpp{all|9|10}
#include <iostream>
using namespace std;

int main() {
  int a;
  float b;
  string c;

  cin >> a >> b >> c; // input: 01 01.0 01.0
  cout << a << " " << b << " " << c << endl; // output: 1 1 01.0

  return 0;
}
```

---

# From C to C++: String

```cpp{all|10-12|14-16}
#include <iostream>
#include <string>
using namespace std;

int main() {
  string str1 = "Hello";
  string str2 = "Hello";
  string str3 = "World";

  // String is comparable.
  cout << str1 == str2 << endl; // True
  cout << str1 == str3 << endl; // False

  // Strings can be concatenated.
  string str4 = str1 + str3;
  cout << str4 << endl;

  return 0;
}
```

---

# From C to C++: Vector

- C++'s new container, needs to include `<vector>`.
- Do not need to declare the size, but slower than array.
- Use `template` to declare vector type.

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
  vector<int> a;

  a.push_back(1); // a[0] = 1
  a.push_back(2); // a[1] = 2

  vector<vector<int>> 2d_array;

  return 0;
}
```

---

# WSL

<img src="/wsl.png" />

---

# WSL

## Installation

```sh
wsl --install
```

or download from microsoft store

```sh
wsl --install Ubuntu
```

---

# WSL

<v-clicks>

- Can access Windows execution files
- Can use Windows files
- Can setup server
- Can have multiple sub-system
- Win11 has gWSL
- Can use [Nividia CUDA](https://learn.microsoft.com/en-us/windows/ai/directml/gpu-cuda-in-wsl)
- Some commands may not work ([WSL-kerel](https://github.com/microsoft/WSL2-Linux-Kernel))

</v-clicks>

---
layout: cover
---

## Thanks for listening
## Any Questions?