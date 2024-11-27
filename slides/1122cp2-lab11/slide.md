---
_title: "Computer Programming 2 Lab"
themeConfig:
  primary: '#85ffec'
  primary-dark: '#2a8073'
addons:
  - slidev-addon-addon
---

# Computer Programming 2

2024/05/29 Andy Hung

---

# Outline

- HW09 solution
- Recap
    - DFS
    - BFS
    - Tree
    - Sort

---

# HW09

<div class="h-[400px] pr-1 overflow-y-scroll">

```c
#include <bits/stdc++.h>
using namespace std;

const int dx[] = {1, -1, 0, 0};
const int dy[] = {0, 0, 1, -1};
enum Direction { DOWN,
                 UP,
                 RIGHT,
                 LEFT,
                 START };

void printTable(int** map, int N) {
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            printf("%d ", map[i][j]);
        }
        printf("\n");
    }
}

struct Point {
    int x, y;
    Point(int x, int y) : x(x), y(y) {}
};

bool isValid(int x, int y, int m, int** map) {
    return x >= 0 && x < m && y >= 0 && y < m && map[x][y] != 1;
}

Point slide(Point start, Direction dir, int m, int** map) {
    int x = start.x;
    int y = start.y;
    while (isValid(x + dx[dir], y + dy[dir], m, map)) {
        x += dx[dir];
        y += dy[dir];
    }
    return Point(x, y);
}

int solver(int** map, int N, Point start, Point end) {
    bool visited[N][N];
    queue<pair<Point, vector<Direction>>> q;
    q.push({start, {}});

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            visited[i][j] = false;
        }
    }
    visited[start.x][start.y] = true;

    while (!q.empty()) {
        auto [current, path] = q.front();
        q.pop();

        if (current.x == end.x && current.y == end.y) {
            // for (const Direction& move : path) {
            //     cout << move << endl;
            // }
            return path.size();
        }

        for (int dir = DOWN; dir != START; ++dir) {
            Point next = slide(current, static_cast<Direction>(dir), N, map);
            if (!visited[next.x][next.y]) {
                visited[next.x][next.y] = true;
                vector<Direction> newPath = path;
                if (dir == 0)
                    newPath.push_back(DOWN);
                else if (dir == 1)
                    newPath.push_back(UP);
                else if (dir == 2)
                    newPath.push_back(RIGHT);
                else if (dir == 3)
                    newPath.push_back(LEFT);
                q.push({next, newPath});
            }
        }
    }
    return -1;
}

int main() {
    int N;
    while ((cin >> N) && !cin.eof()) {
        int** map;
        map = (int**)malloc(sizeof(int*) * N);
        for (int i = 0; i < N; i++) {
            map[i] = (int*)malloc(sizeof(int) * N);
            for (int j = 0; j < N; j++) {
                cin >> map[i][j];
            }
        }
        // printTable(startMap, N);
        // printTable(map, N);
        int runs = 0;
        cin >> runs;
        for (int i = 0; i < runs; i++) {
            int startX, startY, endX, endY;
            cin >> startX >> startY >> endX >> endY;
            int valid = solver(map, N, Point(startX, startY), Point(endX, endY));
            if (valid > 0) {
                cout << valid << endl;
            } else {
                cout << "No" << endl;
            }
        }
        for (int i = 0; i < N; i++) {
            free(map[i]);
        }
        free(map);
    }
}
```

</div>


---

```c
int solver(int** map, int N, Point start, Point end) {
    bool visited[N][N]; // assume visited[][] is all 0
    queue<pair<Point, vector<Direction>>> q;
    q.push({start, {}});
    while (!q.empty()) {
        auto [current, path] = q.front();
        q.pop();
        if (current.x == end.x && current.y == end.y) {
            return path.size();
        }
        for (int dir = DOWN; dir != START; ++dir) {
            Point next = slide(current, static_cast<Direction>(dir), N, map);
            if (!visited[next.x][next.y]) {
                visited[next.x][next.y] = true;
                vector<Direction> newPath = path;
                newPath.push_back(DIRECTION); // push its direction, useing DIRECTION here
                q.push({next, newPath});
            }
        }
    }
    return -1;
}
```

---

```cpp
bool isValid(int x, int y, int m, int** map) {
    return x >= 0 && x < m && y >= 0 && y < m && map[x][y] != 1;
}

Point slide(Point start, Direction dir, int m, int** map) {
    int x = start.x;
    int y = start.y;
    while (isValid(x + dx[dir], y + dy[dir], m, map)) {
        x += dx[dir];
        y += dy[dir];
    }
    return Point(x, y);
}
```

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

---

# Breadth-First Search (BFS)

- **Definition:** BFS explores a graph level by level
- **Steps:**
  1. Start from a source node
  2. Explore all neighbors at the current depth **before** moving to the next depth
  3. Use a **queue** to keep track of nodes to visit
  4. Mark visited nodes to avoid revisiting

---

# Breadth-First Search (BFS)

```cpp

int BFS(int board[10][10], int i, int j) {
    queue<pair<pair<int, int>, int>> q;
    q.push({{i, j}, 0});
    bool visited[10][10] = {};
    while(!q.empty()) {
        auto [point, count] = q.front();
        q.pop();
        int dirx[4] = {0, 0, 1, -1};
        int diry[4] = {1, -1, 0, 0};
        for(int i = 0; i < 4; i++) {
            if(!visited[point.first + dirx[i]][point.second + diry[i]]) {
                visited[point.first + dirx[i]][point.second + diry[i]] = true;
                q.push({{point.first + dirx[i], point.second + diry[i]}, count + 1});
            }
        }
    }
}

```

---

# Tree

![](/tree.png)

- inOrder: 6 13 17 27 33 42 48
- preOrder: 27 13 6 17 42 33 48
- postOrder: 6 17 13 33 48 42 27

---

# Sort

| Algorithm | Best case | Worst case |
|-----------|-----------|------------|
| Bubble Sort | O(N) | O(N^2) |
| Quick Sort | O(Nlog(N)) | O(N^2) |
| Merge Sort| O(Nlog(N)) | O(Nlog(N)) |

<br />

> Try to give an example of best and worst case

---

# Final Exam

- Date: 2024/06/05 && 2024/06/12
- Time: 13:10 ~ 16:00
- Coverage: CP1 & CP2
- Rules:
    - You are only allow to view webpages of
        - OJ
        - CPP refrence
    - [Generative AI is not allowed]{color=red}

---

# Final

Final exam will split into 2 parts
- [Selection questions]{color=orange}
    - Singlechoice, Multichoice, Clozz etc. Will remain in simple IO.
    - You have [1 time]{color=red} to re-choice, or you won't get the score.
- [Normal online judge questions]{color=orange}
    - Have partial score, just like CP1's final
    - 4 questions

<br />

> All of the above exam will use oj to judge

---
layout: cover
---

# Thanks fo listening
This is my last TA slide in NCCU, good luck in the final.
