---
theme: andyjjrt
title: "**Computer Programming 1**"
download: true
transition: slide-left
layout: cover
mdc: true
lineNumbers: true
routerMode: hash
---

# Computer Programming 1 Final

2024/1/9 Andy Hung

---
layout: cover
---

# Writing Section

---
layout: cover
---

# Programming Section

---

# pA

<div class="h-[400px] pr-1 overflow-y-scroll">

```cpp
#include <stdio.h>

// Function to calculate factorial
long long factorial (int n) {
    long long fact = 1;
    for (int i = 2; i <= n; i++)
        fact *= i;
    return fact;
}

long long productOfSequence (int start, int end) {
    long long product = 1;
    for (int i = start; i <= end; i++)
        product *= i;
    return product;
}

long long gcd (long long a, long long b) { return b == 0 ? a : gcd(b, a % b); }
long long C (int n, int r) {
    if (r == 0) return 1;

    long long arr[r]; // n ~ n - r + 1
    for (int i = 0; i < r; ++i)
        arr[i] = n - i;

    // 1 ~ r
    for (int i = 1; i < r + 1; ++i) {
        long long v = i;
        for (int j = 0; j < r; ++j) {
            long long g = gcd(arr[j], v);
            arr[j] /= g;
            v /= g;
            if (v == 1) break;
        }
    }

    long long res = 1;
    for (int i = 0; i < r; ++i)
        res *= arr[i];

    return res;
}

// Function to calculate binomial coefficient nCr
// nCr = n! / (r! * (n - r)!) where n is the row index and r is the column index
// long long binomialCoeff (int n, int r) { return factorial(n) / (factorial(r) * factorial(n - r)); }
// long long binomialCoeff (int n, int r) {
//     if (n - r < r) {
//         return productOfSequence(n - r + 1, n) / factorial(r);
//     } else {
//         return productOfSequence(r + 1, n) / factorial(n - r);
//     }
// }
long long binomialCoeff (int n, int r) { return C(n, r); }

// Function to count the frequency of digit in a number
int countDigit (long long n, int digit) {
    int count = 0;
    while (n > 0) {
        if (n % 10 == digit) count++;
        n /= 10;
    }
    return count;
}

int main () {
    int i, d, frequency = 0;
    // printf("Enter row index (i) and digit (d): ");
    scanf("%d %d", &i, &d);

    // Generating the i-th row and counting the frequency of d
    for (int j = 0; j <= i; j++) {
        long long number = binomialCoeff(i, j);
        // printf("%lld\n", number);
        frequency += countDigit(number, d);
    }

    // printf("Frequency of %d in %d-th row of Pascal's Triangle: %d\n", d, i, frequency);
    printf("%d\n", frequency);
    return 0;
}
```

</div>

---

# pB

<div class="h-[400px] pr-1 overflow-y-scroll">

```cpp
#include <stdio.h>
#include <stdlib.h>

// Function to generate a spiral matrix of size n x n
int** generateMatrix(int n, int* returnSize, int** returnColumnSizes) {
    // Dynamically allocate memory for the 2D array
    int** res = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        res[i] = (int*)malloc(n * sizeof(int));
    }

    // Variables to keep track of the starting point of the spiral
    int startx = 0, starty = 0;
    // Number of loops to make (half of the matrix size)
    int loop = n / 2;
    // Middle index for odd-sized matrix
    int mid = n / 2;
    // Counter to fill in the matrix
    int count = 1;
    // Offset to manage the size of each spiral loop
    int offset = 1;
    // Loop indices
    int i, j;
    
    // Loop to generate the spiral
    while (loop--) {
        i = startx;
        j = starty;

        // Fill the top row
        for (j = starty; j < n - offset; j++) {
            res[startx][j] = count++;
        }
        // Fill the right column
        for (i = startx; i < n - offset; i++) {
            res[i][j] = count++;
        }
        // Fill the bottom row in reverse
        for (; j > starty; j--) {
            res[i][j] = count++;
        }
        // Fill the left column in reverse
        for (; i > startx; i--) {
            res[i][j] = count++;
        }

        // Move to the next inner loop
        startx++;
        starty++;
        // Increase the offset for the next loop
        offset += 1;
    }

    // Fill the center for an odd-sized matrix
    if (n % 2) {
        res[mid][mid] = count;
    }

    // Set the return size and column sizes for the matrix
    *returnSize = n;
    *returnColumnSizes = (int*)malloc(n * sizeof(int));
    for (int k = 0; k < n; k++) {
        (*returnColumnSizes)[k] = n;
    }
    
    // Return the generated matrix
    return res;
}

int main() {
    // Read the size of the matrix from the user
    int n;
    scanf("%d", &n);

    int returnSize;
    int* returnColumnSizes;
    // Generate the spiral matrix
    int** matrix = generateMatrix(n, &returnSize, &returnColumnSizes);


    // Print the generated spiral matrix
    for (int i = 0; i < returnSize; i++) {
        for (int j = 0; j < returnColumnSizes[i]; j++) {
            printf("%-8d", matrix[i][j]);
        }
        printf("\n");
    }

    // Free the dynamically allocated memory
    for (int i = 0; i < n; i++) {
        free(matrix[i]);
    }
    free(matrix);
    free(returnColumnSizes);

    // End of the program
    return 0;
}
```

</div>

---

# pC

<div class="h-[400px] pr-1 overflow-y-scroll">

```cpp
#include <stdio.h>

int main() {
  int a, b;
  char c, d;
  scanf("[%d,", &a);
  printf("[");
  for(int i = 0;;i++) {
    scanf("%c%d%c", &c, &b, &d);
    if(i != 0) printf(", ");
    printf("%d", a + b);
    a = b;
    if(d == ']') break;
  }
  printf("]\n");
}
```

</div>


---
---

# pD

### Description

Galahad, the hero in the facebook ad, is asking for your help.

Galahad is asked to reach target integer number by passing number gates. After passing each gates, Galahad gains the points on the gates. The initial gates are 0 and 1, multiplied by -2 after each round, which means the gates are approaching in the sequence:

$$
\{0, 1\}, \{0, -2\}, \{0, 4\}, \{0, -8\}, \{0, 16\}...
$$

Your goal is to find the shortest way to reach this integer. They said 99% of players failed! Can you be the only one?

---

# pD

## Simple approach
- The sequence looks like $2^{\mathbb{N}}$.
- First transform decimal input $i$ into Base 2.

For example, $i$ = 123 = $2^6 + 2^5 + 2^4 + 2^3 + 2^1 + 2^0$

<center>

exp | 6 | 5 | 4 | 3 | 2 | 1 | 0
:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:
\{0, 1\} | 1 | 1 | 1 | 1 | 0 | 1 | 1

</center>

But we can see that odd power numbers are negative in this question. For example, -2, -8, -32......

How to solve this?

---

# pD

We have: $-2^n$
We want: $2^n$

To transform $2^n$ into $-2^n$, we can use the truth that $2^n$ is equal to $(2^{n+1} - 2^n)$

So whenever we need a $2^n$ where $n$ is an odd number, we take a $2^{n+1}$ and a $-2^n$.

### Negative numbers

How about negative numbers?  

Then whenever we need a $2^n$ where $n$ is an <span class="text-red">even</span> number, we take a $2^{n+1}$ and a $-2^n$.


$Solved!$


---

# pD

<div class="h-[400px] pr-1 overflow-y-scroll">

```cpp
#include<stdio.h>
#include<stdlib.h>

int main(){
    int N;
    scanf("%d", &N);

    for(int i = 0; i < N; i++){
        long long int q;
        scanf("%lld", &q);
        int top = 0;
        int mode = 1;
        if(q < 0){
            q *= -1;
            mode = 0;
        }
        while(q > 0){
            printf("%c", q % 2 ? 'R' : 'L');
            if((q % 2) && (top % 2 == mode)){
                q += 2;
            }
            q >>= 1;
            top++;
        }
        printf("\n");
    }
    return 0;
}
```

</div>


---

# pD

### reference
Base -2 ([UVa11121](https://onlinejudge.org/external/111/11121.pdf))

---

# pE

### Description

Galahad, the hero in the facebook ad, face a new problem today.
Numerous of vocabularies are given, and he is asked to pick vocabularies from them. However, if he picks any duplicate vocabulary, he will lose all the points. Can you help Galahad to beat this level?

---

# pE

### Simple approach
1. Read all the strings.
2. Cut them into vocabularies.
3. Count unique vocabularies.
    1. Count if not exists in all previous vocabularies.$(O(N^2))$
    2. Count by sort. Count if different with previous vocabulary.$(O(N\log{N}))$
4. Print the count.

---

# pE

<div class="h-[400px] pr-1 overflow-y-scroll">

```cpp
#include<stdio.h>
#include<string.h>
#include<stdlib.h>

int cmp(const void* a, const void* b){
    char* A = *(char**)a;
    char* B = *(char**)b;
    return strcmp(A, B);
}

int main(){
    char* words[100000];
    int total = 0;
    char* input = (char*)malloc(sizeof(char)*50*100000);
    scanf("%s", input);

    char* tok = strtok(input, ",");
    while(tok != NULL){
        words[total++] = tok;
        tok = strtok(NULL, ",");
    }

    qsort(words, total, sizeof(char*), cmp);

    int ans = 1;
    for(int i = 1; i < total; i++){
        if(strcmp(words[i-1], words[i])){
            ans++;
        }
    }
    printf("%d\n", ans);
    return 0;
}
```

</div>


---

# pF

<div class="h-[400px] pr-1 overflow-y-scroll">

```cpp
#include<stdio.h>
#include<stdlib.h>

int dfs(int i, int j, int N, int** board, int count, int max_count){
    if(i == 0 && j == N/2){
        if(count == max_count){
            return 1;
        }
        else{
            return 0;
        }
    }
    if(i >= N || j >= N || i < 0 || j < 0){
        return 0;
    }
    if(board[i][j] == 1){
        return 0;
    }
    board[i][j] = 1;
    int ans = 0;
    ans += dfs(i+1, j, N, board, count+1, max_count);
    ans += dfs(i-1, j, N, board, count+1, max_count);
    ans += dfs(i, j+1, N, board, count+1, max_count);
    ans += dfs(i, j-1, N, board, count+1, max_count);
    board[i][j] = 0;
    return ans;
}

int main(){
    int t;
    scanf("%d", &t);
    for(int t_ = 0; t_ < t; t_++){
        int N;
        scanf("%d", &N);
        int** board = (int**)malloc(sizeof(int*)*N);
        int max_count = 0;
        for(int i = 0; i < N; i++){
            board[i] = (int*)malloc(sizeof(int)*N);
            for(int j = 0; j < N; j++){
                scanf("%d", &board[i][j]);
                if(board[i][j] == 0){
                    max_count++;
                }
            }
        }
        /*
        for(int i = 0; i < N; i++){
            for(int j = 0; j < N; j++){
                printf("%d ", board[i][j]);
            }
            printf("\n");
        }
        */
        int ans = dfs(N-1, N/2, N, board, 1, max_count);
        printf("%d\n", ans);
    }
    return 0;
}
```

</div>



---

# Tips in programming contest

- Follow the crowd.
- View through the problems.
- Try get some scores, better than 0.

---
layout: cover
---

# CP2 is important

## Although you have English class, it's a tade-off

---

# Some things you can do in vacation

- CPP
- OOP
- [ByteByteGoHq/system-design-101](https://github.com/ByteByteGoHq/system-design-101)
- Brand Management (Github)
- Other programming labguage...
