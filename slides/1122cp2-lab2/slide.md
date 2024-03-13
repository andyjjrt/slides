---
_title: "**Computer Programming 2 Lab**"
themeConfig:
  primary: '#FF7A70'
  primary-dark: '#8c1c13'
addons:
  - slidev-addon-addon
---

# Computer Programming 2

2024/03/12 Andy Hung

---

# Outline

- HW01 solution
- HW02
- Git
- EX01

---

# HW01 solution

<div class="h-[400px] pr-1 overflow-y-scroll">

```cpp
#include <iostream>
#include <vector>
#include <limits> // For numeric_limits

using namespace std;

int main() {
    int N; // Number of days
    cin >> N;

    vector<int> prices(N); // Array to store the prices
    for(int i = 0; i < N; i++) {
        cin >> prices[i];
    }

    // Initialize variables for the minimum price so far and the maximum profit
    int min_price = numeric_limits<int>::max();
    int max_profit = 0;

    // Loop through each day's price
    for(int i = 0; i < N; i++) {
        // Update the minimum price if the current price is lower
        if (prices[i] < min_price) {
            min_price = prices[i];
        } 
        // Otherwise, check if selling on this day is more profitable
        else if (prices[i] - min_price > max_profit) {
            max_profit = prices[i] - min_price;
        }
    }

    // Print the maximum profit
    cout << max_profit << endl;

    return 0;
}
```

</div>

---

# HW02

## Description
You are given $n$ arrays, each array is sorted in ascending order.
Merge all arrays into one sorted array in ascending order.


## Input
First line includes a number $n$, means there are $n$ arrays.
Then there are $n$ sections, each section includes a number $k$ in the first line, and $k$ numbers seperated in space in the second line.

#### Technical Specification:
- $0 \leq n \leq 10^4$
- $0 \leq k \leq 500$
- $-10^4 \leq num \leq 10^4$

---

# HW02

## Output
Merge all arrays into one sorted array in ascending order.

<div class="grid grid-cols-2 gap-4 mb-4">
<div>

```
3
3
1 4 5
3
1 3 4
2
2 6
```

</div>
<div>

```
1 1 2 3 4 4 5 6

```

</div>
</div>

> Do not use `qsort` or `std::sort` or other sorting methods.

---

# Git

- A distributed version control system (VCS)
- Manage and track changes in source code during the development process

<div class="flex justify-center my-4">
  <img src="https://raw.githubusercontent.com/ByteByteGoHq/system-design-101/main/images/git-commands.png" class="h-80" />
</div>

---

# What if not git?

<div class="flex justify-center my-4">
  <img src="/BadVCS.png" class="h-100" />
</div>

---

# Install Git

- Windows: [Git Bash](https://gitforwindows.org/)
- Ghost: Included
- Mac:
  ```sh
  brew install git
  ```
- Linux(Ubuntu/Debian):
  ```sh
  sudo apt install git
  ```

---

# [Github](https://www.github.com/)

- One of the largest repository hosting service.
- Have bunch of tools help developers.
  - Pull requests
  - Issues
  - Wiki

> Git != Github

---

# Setup your Github's git setting

> [Password is not allowed when using github via git cli.](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)

- SSH: [Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
  - [Generating a new ssh-key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
  - Highly recommand generate a new one even you may already have one

  ```
  $ ssh -T git@github.com
  Hi andyjjrt! You've successfully authenticated, but GitHub does not provide shell access.
  ```

- HTTPS: [Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

# EX01: Github First Contribution

- Follow the instructions: [First Contributions](https://github.com/firstcontributions/first-contributions)
- In your PR, please leave your <span class="dark:text-red-400 text-red-500">student ID </span> in the comment.
- Copy the PR link, and submit [ex01](https://nccuoj.ebg.tw/contest/127/problem/ex01)

<div class="flex my-4">
  <img src="/PR.png" class="h-70" />
</div>

--- 
layout: cover
---

# Thanks for listening