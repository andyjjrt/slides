---
_title: "Computer Programming 2 Lab"
themeConfig:
  primary: '#9ec3ff'
  primary-dark: '#16448c'
addons:
  - slidev-addon-addon
---

# Computer Programming 2

2024/05/22 Andy Hung

---

# Outline

- HW07 solution
- HW08 solution
- HW09

---

# HW08

<div class="h-[400px] pr-1 overflow-y-scroll">

```c
#include <limits.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

void printTable(int** map, int N) {
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            printf("%d ", map[i][j]);
        }
        printf("\n");
    }
}

typedef struct {
    int x;
    int y;
} Point;

int** shortestPathMark(int** map, int N, int startX, int startY, int endX, int endY) {
    int dx[] = {-1, 0, 1, 0};
    int dy[] = {0, 1, 0, -1};

    bool visited[N][N];
    int** distance = (int**)malloc(sizeof(int*) * N);

    for (int i = 0; i < N; i++) {
        distance[i] = (int*)malloc(sizeof(int) * N);
        for (int j = 0; j < N; j++) {
            visited[i][j] = false;
            distance[i][j] = map[i][j] == 1 ? -1 : INT_MAX;
        }
    }

    visited[startX][startY] = true;
    distance[startX][startY] = 0;

    Point queue[N * N];
    int front = 0, rear = 0;
    queue[rear++] = (Point){startX, startY};

    while (front != rear) {
        Point curr = queue[front++];

        for (int i = 0; i < 4; i++) {
            int newX = curr.x + dx[i];
            int newY = curr.y + dy[i];

            if ((newX >= 0 && newX < N && newY >= 0 && newY < N) && !visited[newX][newY] && map[newX][newY] == 0 && distance[newX][newY] != -1) {
                visited[newX][newY] = true;
                distance[newX][newY] = distance[curr.x][curr.y] + 1;
                queue[rear++] = (Point){newX, newY};
            }
        }
    }

    return distance;
}

int main() {
    int N;
    while (scanf("%d", &N) != EOF) {
        int** map;
        map = (int**)malloc(sizeof(int*) * N);
        for (int i = 0; i < N; i++) {
            map[i] = (int*)malloc(sizeof(int) * N);
            for (int j = 0; j < N; j++) {
                scanf("%d", &map[i][j]);
            }
        }
        int startX, startY, endX, endY;
        scanf("%d %d %d %d", &startX, &startY, &endX, &endY);
        int** startMap = shortestPathMark(map, N, startX, startY, endX, endY);
        int** endMap = shortestPathMark(map, N, endX, endY, startX, startY);
        int shortestPath = startMap[endX][endY];
        // printTable(startMap, N);
        // printTable(endMap, N);
        int runs;
        scanf("%d", &runs);
        for (int i = 0; i < runs; i++) {
            int testX, testY;
            scanf("%d %d", &testX, &testY);
            if (startMap[testX][testY] == -1 || shortestPath == -1 || shortestPath == INT_MAX) {
                printf("No\n");
                continue;
            }
            int distFromStart = startMap[testX][testY];
            int distFromEnd = endMap[testX][testY];
            // printf("%d %d %d\n", distFromStart, distFromEnd, shortestPath);
            if (distFromStart == 0 || distFromEnd == 0 || distFromStart + distFromEnd != shortestPath) {
                printf("No\n");
            } else {
                printf("Yes\n");
            }
        }
        for (int i = 0; i < N; i++) {
            free(map[i]);
        }
        free(map);
        printf("\n");
    }
}
```

</div>


---

# HW08

<div class="h-[400px] pr-1 overflow-y-scroll">

```c
#include <iostream>
#include <stdexcept>
using namespace std;

class Node {
   public:
    int value;
    Node* left;
    Node* right;
    Node(int value) {
        this->value = value;
        this->right = NULL;
        this->left = NULL;
    }
};

class BST {
   private:
    void printInOrder(Node* root) {
        if (root == NULL) {
            return;
        }
        printInOrder(root->left);
        cout << root->value << " ";
        printInOrder(root->right);
    }

    void printPostOrder(Node* root) {
        if (root == NULL) {
            return;
        }
        printPostOrder(root->left);
        printPostOrder(root->right);
        cout << root->value << " ";
    }

    void printPreOrder(Node* root) {
        if (root == NULL) {
            return;
        }
        cout << root->value << " ";
        printPreOrder(root->left);
        printPreOrder(root->right);
    }

    bool innerCheck(Node* root, int value) {
        if (root == NULL) {
            return false;
        }
        if (root->value == value) {
            return true;
        }
        bool leftAnswer = innerCheck(root->left, value);
        bool rightAnswer = innerCheck(root->right, value);

        return leftAnswer | rightAnswer;
    }

   public:
    Node* head;
    BST() {
        this->head = NULL;
    }
    void insert(int value) {
        Node* tmpPtr = this->head;
        if (tmpPtr == NULL) {
            this->head = new Node(value);
        } else {
            Node* prevTempPtr;
            while (tmpPtr != NULL) {
                prevTempPtr = tmpPtr;
                if (value == (*tmpPtr).value) {
                    throw invalid_argument(to_string(value) + " already exists in the library.");
                }
                tmpPtr = value < (*tmpPtr).value ? (*tmpPtr).left : (*tmpPtr).right;
            }
            if (value < (*prevTempPtr).value) {
                (*prevTempPtr).left = new Node(value);
            } else {
                (*prevTempPtr).right = new Node(value);
            }
        }
    }
    void check(int value) {
        bool result = innerCheck(this->head, value);
        if (result) {
            cout << value << " exists in the library." << endl;
        } else {
            cout << value << " does not exists in the library." << endl;
        }
    }
    void show() {
        cout << "Preorder: ";
        this->printPreOrder(this->head);
        cout << endl;
        cout << "Inorder: ";
        this->printInOrder(this->head);
        cout << endl;
        cout << "Postorder: ";
        this->printPostOrder(this->head);
        cout << endl;
    }
};

int main() {
    BST bst = BST();
    string command;
    while (1) {
        cin >> command;
        if (command == "insert") {
            int value;
            cin >> value;
            try {
                bst.insert(value);
            } catch (const invalid_argument& e) {
                cout << e.what() << endl;
            }
        } else if (command == "check") {
            int value;
            cin >> value;
            bst.check(value);
        } else if (command == "show") {
            bst.show();
        } else if (command == "end") {
            bst.show();
            break;
        }
    }
}
```

</div>

---
layout: cover
---

# [HW09](https://nccuoj.ebg.tw/contest/127/problem/hw09)

---
layout: image
image: https://hypixel.net/attachments/1594593042500-png.1839780/
---
---

# Some fresh stuffs these weeks

- GPT-4o: https://www.youtube.com/live/DQacCB9tDaw
- Google IO keynote: https://www.youtube.com/@Google
- Microsoft keynote (Copilot+ pc): https://youtu.be/aZbHd4suAnQ

<br />

### If you are writing web:
- Google IO web: https://www.youtube.com/@ChromeDevs/videos

--- 

# Thanks for listening

![](https://cdn.discordapp.com/attachments/1092055846634135652/1242742895581069333/image0.png?ex=664ef203&is=664da083&hm=07b334121b2c99a6c16b1322b9c592fecf197d053696e2b8c82a8fb02059fe6a&){width=400}