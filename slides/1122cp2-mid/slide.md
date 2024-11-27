---
_title: Computer Programming
themeConfig:
  primary: '#d094f7'
  primary-dark: '#530c82'
addons:
  - slidev-addon-addon
---

# Computer Programming 2
Midterm review

---

# Overview

<div class="grid grid-cols-2 gap-4 my-2">
  <img src="/overview.png" />
  <div>

|平均數|50.20634921|
|---|---|
|標準誤|3.098994661|
|中間值|55|
|標準差|24.59750756|
|最小值|0|
|最大值|91|

  </div>

</div>

---

# Q1. Basic UNIX commands

## **Q1-1**

Concatenate all .txt file under current directory into a file named “concat.txt”

Ans: `cat ./*.txt > ./concat.txt`

### **Grading policy**

- no `cat`: [-2]{color=red} pts
- other mistakes: [-1]{color=red} pt for each.

---

# Q1. Basic UNIX commands

## **Q1-2**

Continuing from 1-1, count the number of lines in the file.

Ans: `wc -l ./concat.txt`

### **Grading policy**

- no `wc`: [-2]{color=red} pts.
- other mistakes: [-1]{color=red} pt for each.

---

# Q1. Basic UNIX commands

## **Q1-3**

Continuing from 1-1, find out all the line(s) containing “int”

Ans: `grep "int" ./concat.txt` or `grep -w "int" < ./concat.txt`

### **Grading policy**

- no `grep`: [-2]{color=red} pts.
- `-w` and `<`: [-0]{color=red} pt.
- other mistakes: [-1]{color=red} pt for each.

---

# Q1. Basic UNIX commands

## **Q1-4**

Execute a program named “YJSP” in the background.

Ans: `YJSP &`

### **Grading policy**

- no `&`: [-2]{color=red} pts.
- `./`: [-0]{color=red} pt.
- other mistakes: [-1]{color=red} pt for each.

---

# Q1. Basic UNIX commands

## **Q1-5**

Continuing from 1-4, please show the PID of the background process.

Ans: `jobs -p`

### **Grading policy**

- no `jobs`: [-2]{color=red} pts.
- no `-p`: [-1]{color=red} pt.
- other mistakes: [-1]{color=red} pt for each.

---

# Q1. Basic UNIX commands

## **Q1-6**

Continuing from 1-5, assuming the PID for the process is “114514”. Please save it in
an environment variable named “YJSP_PID”.

Ans: `export YJSP_PID='114514'`

### **Grading policy**

- no `export`: [-2]{color=red} pts.
- spaces between `YJSP_PID`, `=` and `'114514'`: [-1]{color=red} pts.
- no `'`, or using `"`: [-0]{color=red} pts.
- other mistakes: [-1]{color=red} pt for each.

---

# Q1. Basic UNIX commands

## **Q1-7**

Continuing from 1-6, please terminate the background process using the assigned
environment variable.


Ans: `kill $YJSP_PID`

### **Grading policy**

- no `kill`: [-2]{color=red} pts.
- `'` outside `YJSP_PID`:  [-1]{color=red} pts.
- other mistakes: [-1]{color=red} pt for each.

---

# Q2. Macro
Two C macros are provided below and may contain mistakes. Please explain the errors (if exist) in each macro, and provide an example of data that could cause issues when using these macros. If the macro does not contain any error, please write “Correct”.

### **Grading policy**
- 2 pts on example.
- 2 pts on explaination.

---

# Q2. Macro

## **Q2-1**

```c++
#define MAX(a, b) (((a) > (b)) ? (a) : (b))
```
<br />

### Ans:

Using this macro on increasing or decreasing objects may cause problems, like `a++` or `--b`.
For example, `MAX(i++, j)` will be replace with `(((i++) > (j)) ? (i++) : (j))`.
**When `i` is larger than `j`(If you didn't mention this, -1 pt.)**{color=red}, `i` will increase twice.

---

# Q2. Macro

## **Q2-2**

```c++
#define SQR(x) (x*x)
```
<br />

#### Ans:

Using this macro on objects with other operators may cause problems, like `4+3`.
For example, `SQR(4+3)` will be replace with `(4+3*4+3)`, which makes answer = `4 + 12 + 3` = `19` but not `49`.

p.s. I have no idea why half of the students used the same example `3+5`. Maybe the senior who leaked this test paper wrote this answer last year?

---

# Q3. C Preprocessor

<div class="h-[400px] pr-1 overflow-y-scroll">

```c
#define int long long
#define ll long long
#define FOR(i, n) for(int i = 0 ; i < n; i++)
#define FORn(i, n) for(int i = 1 ; i <= n; i++)
#define INF (ll)4e18 //4乘以10^18
#define SQR(j) (j*j)
#define MAX(a, b) (((a) > (b)) ? (a) : (b))

int32_t main() { // 上面定義了int 所以這邊要寫int32_t
    int i = 5;
    int j = i;
    int ans = i;
    ans = (ans + SQR(i)); // 30
    // FORn(j, i) ans = (ans + SQR(j));
    for(int j=1;j<=5;++j){
    	ans = (ans + SQR(j)); // 31 35 44 60 85
	}
    // FOR(i, j) ans += MAX(2 * i - 1, 0);
	for(int i=0;i<5;++i){
    	ans += MAX(2 * i - 1, 0); // 85 86 89 94 101
	}
    ans += INF;
    printf("%lld\n", ans); // 4000000000000000101
    return 0;
}
```

</div>

---

# Q4. Git
As we know, Git is a very powerful version control tool in developer’s daily life, please answer following questions.


1. Please briefly explain the idea of version control. \[2%\]

2. Please write down the basic 5 steps of cloning from a remote repository and pushing back to the remote repository in Exercise 1. (Drawing may help you describe better) \[10%\]

---

# Q4. Git

## **Q4.1 Version control \[2%\]**


![](/4-gpt-answer.png)

- Any synonym of "[records changes to files over time]{color=red}", no partial point.

---

# Q4. Git

## **4.2 Basic 5 steps of Git \[10%\]**

<div class=" my-4">
  <img src="https://raw.githubusercontent.com/ByteByteGoHq/system-design-101/main/images/git-commands.png" class="h-80" />
</div>

- Each one 2pts

---

# Q5. Linked-list

## **Delete**

<div class="grid grid-cols-2 gap-4 my-2">
  <div>
  
```c
void Delete(NODEPTR *head, NODEPTR p) {
    if (*head == p)
        *head = p->right; //(1)

    if (p->right != NULL)
        p->right->left = p->left; //(2) 

    if (p->left != NULL)
        p->left->right = p->right; //(3)

    free(p);
    return;
}
```

  </div>
  <div>

  ![](/q5-1.png)

  </div>

</div>



---

# Q5. Linked-list

## **Insert**

<div class="grid grid-cols-2 gap-4 my-2">
  <div class="h-[350px] pr-1 overflow-y-scroll">

```c
void InsertNode(NODEPTR head, int x) {
    NODEPTR q = getnode();
    q->info = x;
    if(head == NULL){
        head = q; //(4)
        return;
    }
    else{
        NODEPTR cur = getnode();
        cur = head; //(5)
        while(cur->right != NULL){
            cur = cur->right; //(6)
        }
        cur->right = q; //(7)
        q->left = cur; //(8)
        return;
    }
}
```

  </div>
  <div>

  ![](/q5-2.png)

  ![](/q5-3.png)

  </div>

</div>

---

# Q6. Dynamic memory allocation

You’ve given a struct Node, please answer the following questions. If you need extra functions to make your code work, feel free to declare.

```cpp
struct Node {
    int value;
    struct Node *nextPtr;
};
typedef struct Node Node;
```


1. Complete the function below, which generates an array with `m` linked lists. Each linked list should have `m` nodes, and every element should be set to the value `n` at `arr`. \[10%\]
    ```cpp
    void create2DArray(Node** arr, int m, int n);
    ```
2. Complete the function below, which free the memory usage of the array. \[8%\]
    ```cpp
    void free2DArray(struct Node* arr);
    ```
3. If we don’t free after malloc, what will happen? \[2%\]

---

# Q6. Dynamic memory allocation

## **6.1 create2DArray \[10%\]**

<div class="flex gap-8">
  <div>
    <br />
    <div class="flex flex-col">
      <div class="flex items-center" v-for="i in Array(5)">
        <div
          class="h-10 w-10 bg-green-500 border-6 flex justify-center items-center text-black"
        >
          n
        </div>
        <template v-for="item in Array(5)">
          <div class="h-1 w-4 bg-slate-500" v-click="1" />
          <div
            class="h-8 w-8 rounded flex justify-center items-center bg-green-500 text-black" 
            v-click="1"
          >
            n
          </div>
        </template>
      </div>
    </div>
  </div>
  <div v-click="2">

  Steps for 6.1:
  - malloc array of `Node` length m
  - For each node, generate m `Nodes`, and give every `Node` value `n`

  </div>

</div>

---

# Q6. Dynamic memory allocation

## **6.1 create2DArray \[10%\]**

<br />

```cpp{all|2|4|5-9|10|all}
void create2DArray(Node **arr, int m, int n) {
    *arr = (Node *)malloc(m * sizeof(Node));
    for (int i = 0; i < m; i++) {
        Node *tmp = *arr + i;
        for (int j = 0; j < m; j++) {
            tmp->value = n;
            tmp->nextPtr = (Node *)malloc(sizeof(Node));
            tmp = tmp->nextPtr;
        }
        tmp->nextPtr = NULL;
    }
}
```

---

# Q6. Dynamic memory allocation

## **6.1 create2DArray \[10%\]**

<br />

### **Scoring**:

- `malloc` the array, and know it's a pointer refrence -> [5pts]{color=red}
- Use loop to create link list, for each node:
  - Assign value `n` to node -> [1pts]{color=red}
  - `malloc` a new node and assign to current node's `nextPtr` -> [2pts]{color=red}
  - Set tmp node to new created node -> [1pts]{color=red}
- Set last `Node`'s `nextPtr` to `NULL` -> [1pts]{color=red}

> Every mistake reduce [1pts]{color=red} to section limit

---

# Q6. Dynamic memory allocation

## **6.2 free2DArray \[8%\]**

<div class="flex gap-8">
  <div>
    <br />
    <div class="flex flex-col">
      <div class="flex items-center" v-for="i in Array(5)">
        <div
          class="h-10 w-10 bg-green-500 border-6 flex justify-center items-center text-black"
        >
          n
        </div>
        <template v-for="item in Array(5)">
          <div class="h-1 w-4 bg-slate-500" v-click.hide="1" />
          <div
            class="h-8 w-8 rounded flex justify-center items-center bg-green-500 text-black" 
            v-click.hide="1"
          >
            n
          </div>
        </template>
      </div>
    </div>
  </div>
  <div v-click="2">

  Steps for 6.2:
  - For every link list in the array, free all nodes after first node
  - Free the array

  </div>

</div>

---

## **6.2 free2DArray \[8%\]**

```cpp{all|3|4,8|5-7|10|all}
void free2DArray(struct Node *arr, int m) {
    for (int i = 0; i < m; i++) {
        Node *tmp = arr[i].nextPtr;
        while (tmp != NULL) {
            Node *freePtr = tmp;
            tmp = tmp->nextPtr;
            free(freePtr);
        }
    }
    free(arr);
};
```

### **Scoring**:

- Use loop to free link list -> [4pts]{color=red}
- Free the array -> [4pts]{color=red}
> Every mistake reduce [1pts]{color=red} to section limit [4pts]{color=red}

---

# Q6. Dynamic memory allocation

## **6.3 Don’t free after malloc \[2%\]**

It will cause [memory leak]{color=red}

- Any synonym of "[memory leak]{color=red}"
- Partial point for "[memory wont free]{color=red}" etc.


---

# Q7. Sort

Given a struct "pokemon", please write a function to sort them. The sorting criteria is
based on their power, calculated as atk^2 + def^2. Sort in ascending order of power. If
two Pokémon have equal power, sort by name alphabetically.

---

# Q7. Sort

## **Q7-1**

Write a compare function with called by reference. [10%]

```c++
struct pokemon{
  int id;
  int atk;
  int def;
  string name;
};
```

### **Answer**

```c++
bool mycmp(pokemon & a, pokemon & b){
  int a_pwr = a.atk * a.atk + a.def * a.def;
  int b_pwr = b.atk * b.atk + b.def * b.def;
  if(a_pwr != b_pwr) return a_pwr < b_pwr;
  else return a.name < b.name;
}
```

---

### **Other (cool) answers**:

```c++
bool mycmp(pokemon & a, pokemon & b){
  return (
    (pow(a.atk, 2) + pow(a.def, 2) == pow(b.atk, 2) + pow(b.def, 2))
    ? a.name < b.name :
    (pow(a.atk, 2) + pow(a.def, 2) < pow(b.atk, 2) + pow(b.def, 2))
  );
}
```

<br />

### **Grading policy**
 - Not using call by reference: [-5]{color=red} pts.
 - Wrong sorting direction(`a > b`): [-2]{color=red} pts.
 - Other mistakes: basically [-1]{color=red} pt. Serious mistakes may receive more penalties.

---

# Q7. Sort

## **Q7-2**

Please write the correct line to call `std::sort`. (5%)

```c++
int main(){
  pokemon PMs[5] = {
    {114, 5, 14, "Yajuu"},
    {621, 20, 0, "Yoimiya"},
    {486, 10, 10, "Subaru"},
    {152, 5, 15, "Okayu"},
    {514, 5, 14, "Koishi"}
  };
```

<br />

### **Answer**
```c++
sort(PMs, PMs+5, mycmp);
```

---

### **Other answers**:

```c++
std::sort(PMs, PMs+5, mycmp);
```

### **Grading policy**
 - No partial score.

---

# Q7. Sort

## **Q7-3**

Please write the final output. (5%)

```c++
for(int i = 0; i < 5; i++){
  if(i != 4){
    cout << PMs[i].id << " ";
  }
  else{
    cout << PMs[i].id << endl;
  }
}
```

---

### **Answer**
```
486 514 114 152 621
```

### **Grading policy**
 - Wrong format (write newline instead of space): [-2]{color=red} pts.
 - Otherwise, no partial score.

---

# Q8. Pointers

## **a.**

```c
int x = 0;
void p(int *y, int *z) {
    int *a = &x; // 最靠近的x=0
    int *b = y; 
    int *c = z; // b跟c就指向同一個址
    *a = *a + 2;
    *b = *b + 2;
    *c = *c + 1;
    printf("%d, %d, %d\n", *a, *b, *c); //2 4 4
}
int main() {
    int x = 1;
    int *y = &x;
    int *z = &x;   
    p(y, z); //傳入同一個址
    return 0;
}
```

---

# Q8. Pointers

## **b.**

<div class="h-[350px] pr-1 overflow-y-scroll">

```c
int main(){				
    int i[]={1,2,3,4,5};
    int *pa[]={i+4,i+2,i,i+1,i+3};
	
    int **p2 = pa; // pa本身是紀錄這個array的第一個位置
    printf("**p2 = %d\n", **p2); // 5

    p2 = p2 + 3;
    printf("**p2 = %d\n", **p2); // p2 = pa[3] = i[1] = 2

    *p2 = *p2 +1;
    printf("**p2 = %d\n", **p2); // 3

    **(p2--); // p2 = p2-1
    printf("**p2 = %d\n", **p2); // 1

    --(**p2); // 
    printf("**p2 = %d\n", **p2); // 0

    return 0;
}
```

</div>

---
layout: cover
---

## If there's any scoring problem, ask TA for correction

### Please return your sheet after class, or [you won't have midterm score]{color=red}.
