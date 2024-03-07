---
theme: andyjjrt
title: "**Computer Programming 1 Lab**"
download: true
transition: slide-left
layout: cover
url: https://slidev.andyjjrt.cc/1121cp1lab9
mdc: true
---

# Computer Programming 1

2023/12/5 Andy Hung

---

# Outline

- hw09/hw09+
- Struct
- DFS
- BFS
- Debug strategies

---
layout: two-cols
---

# hw09

Tower of Saviors is one of a popular mobile game released in 2013. The game has been known for its special gameplay. In the game, the players will be given a stage with 5 rows and 6 columns and will be asked to dissolve the Runestones on the stage.

::right::

<div style="display: flex; justify-content: center; width: 100%;">
  <img src="https://oj.ebg.tw/public/upload/ea9c242e99.jpg" style="border-radius: 5px; max-width: 90%; max-height: 450px;" />
</div>


<style>
h1 {
  font-weight: 600;
}
</style>

---
layout: two-cols
---

# hw09

Runestones are tiles that players have to align horizontally or vertically with a minimum of 3 Runestones in order to dissolve them.

Aligning at least 3 Runestones of the same attribute will give the players&#039; monsters power to attack or recovery, corresponding with the attributes of the Runestones, which will be <span class="text-blue">Water</span>, <span class="text-red">Fire</span>, <span class="text-green">Earth</span>, <span class="text-yellow">Light</span>, and <span class="text-purple">Dark</span> and <span class="text-pink">Health</span>.


::right::

<div style="display: flex; justify-content: center; width: 100%;">
  <img src="https://oj.ebg.tw/public/upload/d8d3983e61.gif" style="border-radius: 5px; max-width: 90%; max-height: 450px;" />
</div>

<style>
h1 {
  font-weight: 600;
}
</style>

---
layout: two-cols
---

# hw09

In this assignment, you are asked to calculate the final result of monsters&#039; value of attack and recovery by dissolving the given stage.

Notice that in order to simplify the assignment, we do not need to count the combo. But you should dissolve the Runestones repeatedly until there is no any at least 3 Runestones with the same attribute in the stage.


::right::

<div style="display: flex; justify-content: center; width: 100%;">
  <img src="https://oj.ebg.tw/public/upload/27e0ecc1c3.jpg" style="border-radius: 5px; max-width: 90%; max-height: 450px;" />
</div>

<style>
h1 {
  font-weight: 600;
}
</style>

---

# hw09

## **Input**

The input starts with six members in your team. Each team member will provide their **TITLE**, **NAME**, **TYPE**, **ATTACK**, and **RECOVERY**.

As in sample input, the beginning and the end of TITLE are indicated by "----". Other information follows the colon ":".

After the team members, there will be a line of twenty hyphens (--------------------). Please note that you may only provide the **LEADER** and **SUPPORTER**. The **MEMBER** can be None.

The next $N$ lines consist of 6 characters each, ending with "------". These represent Runestones preparing to fall onto the stage. Your stage is under "------", and it consists of a 5x6 2D character array.

---

# hw09

## **Input**

There are 6 types of runestones. In the input, uppercase letters represent Reinforced Runestones, and lowercase letters represent Normal Runestones:

<div class="grid grid-cols-3">
<div>

- Water: W w
- Fire: F f
- Earth: E e
- Light: L l
- Dark: D d
- Health: H h

</div>
<div class="col-span-2">

### Data Spec
- $N \leq 10000$
- $len(\text{Monster name}) < 100$
- $0 \leq \text{Monster attack} < 10000$
- $0 \leq \text{Monster recovery} < 10000$
- $\text{Monster type} \in \{"\text{Water}", "\text{Fire}", "\text{Earth}", "\text{Light}", "\text{Dark}"\}$

</div>

</div>

---

# hw09

## **Output**

You need to calculate the final Damage and Recovery for each member and then output the members from the highest Damage to the lowest Damage. You can use **qsort** to perform this operation.

Each member &#039;s output should be separated by 43 hyphens "-". The name should be printed between two "|" characters, ensuring that there are precisely 41 characters between the two "|". The next line should display the Damage and Recovery, with 20 characters between each pair of "|".

---

# hw09

## **Output**

When calculating final damage and recovery, you can use the following formula:

> $\text{RunestonesBase} = \text{NormalRunestonesCount} \times 0.25 + \text{ReinforcedRunestonesCount} \times 0.4 + \text{RunestoneTypeComboCount} \times 0.25$

Since this assignment is simplified, if runestones&#039; count > 0, we assume one combo count.

---
layout: two-cols
---

# hw09

Take this board as an example:

<v-clicks>

- Some runestones dissolves:
  - 4 <span class="text-green">Earth</span> runestones
  - 5 <span class="text-red">Fire</span> runestones
  - 5 <span class="text-blue">Water</span> runestones
  - 3 <span class="text-yellow">Light</span> runestones
  - 3 <span class="text-purple">Dark</span> runestones
  - 3 <span class="text-green">Earth</span> runestones
  - 3 <span class="text-purple">Dark</span> runestones
- Runestones fall down and fill the board.
- **Repeat** until no runestones can be dissolved.

</v-clicks>

::right::

<div style="display: flex; justify-content: center; width: 100%;">
  <img src="/board.jpg" style="border-radius: 5px; max-width: 90%; max-height: 450px;" />
</div>

<style>
h1 {
  font-weight: 600;
}
</style>

---
layout: two-cols
---

# hw09+

In the last assignment, you are asked to dissolve horizontally or vertically with a minimum of 3 Runestones. As the game ages, new types of dissolving strategies have been introduced.

In this assignment, you need to handle different **LEADER_SKILL**, which represents diffenent resolving strategy:
- <b class="text-red">THREE_ANY</b>: Runestones can be dissolved by aligning 3 or more of them
- <b class="text-red">TWO_HEART_\{TYPE\}</b>: <b class="text-pink">Heart</b> and <b>\{TYPE\}</b> Runestones can be dissolved by aligning 2 or more of them, which <b>\{TYPE\}</b> can be <b class="text-blue">WATER</b>, <b class="text-red">FIRE</b>, <b class="text-green">EARTH</b>, <b class="text-yellow">LIGHT</b>, and <b class="text-purple">DARK</b>.


::right::

<div style="display: flex; justify-content: center; width: 100%;">
  <img src="https://oj.ebg.tw/public/upload/c71cfbe03a.gif" style="border-radius: 5px; max-width: 90%; max-height: 450px;" />
</div>

<style>
h1 {
  font-weight: 600;
}
</style>

---

# hw09+

## **Input**

The input starts with six members in your team. Each team member will provide their **TITLE**, **NAME**, **TYPE**, **ATTACK**, **RECOVERY**, and <b class="text-red">LEADER_SKILL</b>.

As in sample input, the beginning and the end of TITLE are indicated by "----". Other information follows the colon ":".

After the team members, there will be a line of twenty hyphens (--------------------). Please note that you may only provide the **LEADER** and **SUPPORTER**. The **MEMBER** can be None.

The next $N$ lines consist of 6 characters each, ending with "------". These represent Runestones preparing to fall onto the stage. Your stage is under "------", and it consists of a 5x6 2D character array.

---

# hw09+

## **Input**

There are 6 types of runestones. In the input, uppercase letters represent Reinforced Runestones, and lowercase letters represent Normal Runestones:

<div class="grid grid-cols-4">
<div>

- Water: W w
- Fire: F f
- Earth: E e
- Light: L l
- Dark: D d
- Health: H h

</div>
<div class="col-span-3">

### Data Spec
- $N \leq 10000$
- $len(\text{Monster name}) < 100$
- $0 \leq \text{Monster attack} < 10000$
- $0 \leq \text{Monster recovery} < 10000$
- $\text{Monster type} \in \{"\text{Water}", "\text{Fire}", "\text{Earth}", "\text{Light}", "\text{Dark}"\}$
- $\text{Monster LeaderSkill} \in \{"\text{DEFAULT}", "\text{THREE\_ANY}", "\text{TWO\_HEART\_\{TYPE\}}"\}$

</div>

</div>

---

# hw09+

## **Output**

Same as hw09

## **Hint**

Same as the game, a team&#039;s dissolving strategy is effected by the **LEADER** and the **SUPPORTER**, you need to consider both of them.

For example, if the LEADER has THREE_ANY, and the SUPPORTER has TWO_HEART_FIRE, this means for heart and fire ruinestone can be dissolved by aligning 2 or more of them, the other types of ruinestone can be dissolved by aligning 3 or more of them

> This is an extra homework, good luck.

---
layout: two-cols
---

# Struct

- A set of variables

```c
struct Monster {
  int id;
  char name[10];
  int health;
  int attack;
  int recovery;
  // ...
};
```

<v-click>

```c
struct Team {
  struct Monster monster[5];
  struct Monster helper;
};
```

</v-click>

::right::

<img src="/TOS.png" class="h-[400px] mx-auto" />

<style>
h1 {
  font-weight: 600;
}
</style>

---
layout: two-cols
---

# Struct

Use `typedef`

```c
typedef struct Monster Monster;
typedef struct Team Team;
```

::right::

<v-click>

Initialize like a normal variable

```c
Monster monster_1;
monster_1.id = 10560;
strcpy(monster.name, "Gyre of Resonance - Novalis & Ursula");
monster_1.health = 6094;
monster_1.attack = 2209;
monster_1.recovery = 237;
```

</v-click>

<v-click>

Or using malloc

```c
Monster* monster_1 = malloc(sizeof(Monster));
monster_1 -> id = 10560;
strcpy(monster -> name, "Gyre of Resonance - Novalis & Ursula");
monster_1 -> health = 6094;
monster_1 -> attack = 2209;
monster_1 -> recovery = 237;
```

</v-click>

<style>
h1 {
  font-weight: 600;
}
</style>

---

# Struct

Construct a team

```c {1-2|4-6}
Team team;
team.helper = monster_1;

for(int i = 0; i < 5; i++) {
  team.monster[i] = monster_1
}
```

---

# DFS and BFS
- Path Finding and Shortest Paths
- Connectivity Analysis
- and more senarios in future lessons

---
layout: iframe
url: https://huakunshen.github.io/GraphSearchVisualizer/
---
---

# Depth-First Search (DFS)
- **Definition:** DFS explores as far as possible along each branch before backtracking
- **Steps:**
  1. Start from a source node
  2. Define your strategy. For example, left, up, right, down
  3. Rather peak the destination or step in, using recursive functions
  4. Mark visited nodes to avoid revisiting
  5. Returns when all strategy completes

---

# Depth-First Search (DFS)

```c
int dfs(int board[10][10], int i, int j) {
  if(dfs[i][j] == 0) {
    return 0;
  }
  int count = 0;
  if(i + 1 < 10) count += dfs(board, i + 1, j);
  if(i - 1 >= 0) count += dfs(board, i - 1, j);
  if(j + 1 < 10) count += dfs(board, i, j + 1);
  if(j - 1 >= 0) count += dfs(board, i, j - 1);

  return count;
}
```

<v-clicks>

- I prefer step in rather than peak.
- Remember check first to avoid out of boundary.
- Return value depends on what you need, which is important in recursive.

</v-clicks>

---

# Breadth-First Search (BFS)
- **Definition:** BFS explores a graph level by level
- **Steps:**
  1. Start from a source node
  2. Explore all neighbors at the current depth **before** moving to the next depth
  3. Use a **queue** to keep track of nodes to visit
  4. Mark visited nodes to avoid revisiting
- We will learn this after we learn queue.

---

# Debug strategies

<div class="flex justify-center pt-3">
  <img src="/WA.png" class="h-[400px]" />
</div>

---

# Debug strategies

<v-clicks>

- Instead of solely generating test cases on your own, consider trying alternative test cases that align with the problem's specified range.
- Be mindful that the array in the `main()` function has a limit, approximately **1 million integers**. If you require such a sizable array, consider either breaking it down or utilizing dynamic memory allocation with `malloc()`.
- Ensure that your code is easily readable, enabling others to understand what you have written.
- Similarly, incorporating comments in your code aids others in comprehending your thought process and understanding the purpose behind each section.
- Google and ChatGPT can be valuable resources. Asking questions and understanding the responses is more beneficial than relying on mere copy-pasting.

</v-clicks>


---

# Some Bad examples

```c{all|5|6|8}
#include <bits/stdc++.h>
using namespace std;
int main()
{
    int a;
    int b[10001];
    while(cin >> a){
        int c = 0, d = 0, ans = 0;
        if(a == 0) break;
        for (int i = 0; i < a; i++)
        {
            cin >> b[i];
        }
        sort(b, b + a);
        // ...
    } 
}
```


---
layout: cover
---

# Thanks for listening

---
layout: cover
---

# Computer Programming 1

2023/12/9 Andy Hung

---

# hw09 - Input

- Some of the input is unnecessary, use `fgets` to ignore it.
- Use `scanf()` wisely, like:
```c
scanf("TYPE : %s\n", monster[i].type);
```

- Use `strcmp()` to stop reading queue
- Make sure you have right input before dealing with the problem, same for other problems.

---

# hw09 - Hint

- Repeat until the board doesn't have dissolvable stones.
  1. Dissolve the board.
  2. Drop stones.

- Calculate stones.
- Sort.

---

# hw09 - Output

I've gave you the answer.

---

# hw09+ - Hint

> Sorry for the sample, I've changed the sample output.

<br />

- Only **LEADER** and **SUPPORTER** will affect the strategy.
- Try to learn what OOP is, and take a look at your code again.
  - Maybe declaring a **function pointer** in your struct?
  - Maybe wrapping different functions to implent function overloading?
