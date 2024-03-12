---
title: "**Computer Programming 1 Lab**"
layout: cover
transition: slide-left
download: true
mdc: true
hideInToc: true
lineNumbers: true
routerMode: hash
addons:
  - slidev-addon-addon
---

# Computer Programming 1 Lab

2023/09/26 Andy Hung

<div class="gradient-bg"></div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://slidev.andyjjrt.cc/1121cp1lab2" target="_blank"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <bx-bxs-slideshow />
  </a>
</div>

---

# Outline

- WSL
- Basic UNIX Command
- Basic Vim
- First step into C
- Unix File Permissions
- Data types
- Operators
- ex02

<div class="gradient-bg"></div>

---

# TA Hours

- 陳睿廷 Thr. 11:10 ~ 12:00 @ 402
- 陳肇廷 Thr. 13:10 ~ 15:00 @ 402
- 洪晙宸 Fri. 16:10 ~ 17:00 @ 402
- 吳武峰 Fri. 16:10 ~ 17:00 @ 402

<div class="gradient-bg"></div>

---
layout: image-right
image: /WSL.png
backgroundSize: contain
---

# WSL

<v-clicks>

- Can access Windows execution files
- Can use Windows files
- Can setup servers
- Can have multiple sub-system
- Win11 has gWSL
- Can use [Nividia CUDA](https://learn.microsoft.com/en-us/windows/ai/directml/gpu-cuda-in-wsl)
- Some commands may not work ([WSL-kerel](https://github.com/microsoft/WSL2-Linux-Kernel))

</v-clicks>

<div class="gradient-bg"></div>

---

# WSL Installation
[Referene](https://code.visualstudio.com/docs/remote/wsl-tutorial)

### **Prerequisites**
You need Visual Studio Code installed.

### **Install the extension**
The WSL extension enables you to run Visual Studio Code within the Windows Subsystem for Linux (WSL).

![](https://code.visualstudio.com/assets/docs/remote/wsl-tutorial/remote-wsl-extension.png)

<div class="gradient-bg"></div>

---

# WSL Installation

### **Prerequisite check**
With the WSL extension installed, you will see a new Status bar item at the far left.

![remote-status-bar](https://code.visualstudio.com/assets/docs/remote/wsl-tutorial/remote-status-bar.png)

The Remote Status bar item can quickly show you in which context VS Code is running (local or remote) and clicking on the item will bring up the WSL extension commands.

![](https://code.visualstudio.com/assets/docs/remote/wsl-tutorial/wsl-commands.png)

<div class="gradient-bg"></div>

<style>
  img[alt=remote-status-bar] { width: 200px; }
</style>

---
layout: image-right
image: https://code.visualstudio.com/assets/docs/remote/wsl-tutorial/windows-features.png
backgroundSize: contain
---

# WSL Installation

### **Enable WSL**
Windows Subsystem for Linux (WSL) is an optional feature on Windows 10. You can enable it through the Windows Features dialog or PowerShell.

In the Windows search bar, type 'features'(功能) to bring up the Turn Windows Features on and off dialog. Scroll down and check Windows Subsystem for Linux.

<div class="gradient-bg"></div>

---

# WSL Installation

### **Check WSL**
After restarting Windows, you can check that you have WSL enabled by opening a Command Prompt and typing 'wsl'.

![](https://code.visualstudio.com/assets/docs/remote/wsl-tutorial/wsl-check.png)

WSL is enabled, but you haven't installed a Linux distribution yet.

<div class="gradient-bg"></div>

---

# WSL Installation

### **Install a Linux distro**

You install Linux distributions for WSL from the Microsoft Store. You can use the store app, or search for a Linux distro in the Windows search bar. Choose the Linux distribution you want to install (for example Ubuntu) and follow the prompts.

<div class="flex gap-4">
<img src="https://code.visualstudio.com/assets/docs/remote/wsl-tutorial/install-ubuntu.png" />
<img src="https://code.visualstudio.com/assets/docs/remote/wsl-tutorial/linux-terminal.png" />
</div>

<div class="gradient-bg"></div>

<style>
  img { height: 150px; }
</style>

---

# WSL Usage

### **Run In WSL**
In the WSL terminal, make sure you are in the helloWorld folder, and type in 'code .' to launch Visual Studio Code. The '.' argument tells VS Code to open the current folder.

![](https://code.visualstudio.com/assets/docs/remote/wsl-tutorial/launch-code.png)

<div class="gradient-bg"></div>

---

# Basic UNIX Command
Credit: Est.

- `~`   => your home directory 
- `~x`  => x’s home directory 
- `.`   => current directory
- `..`  => parent directory

<v-click>

**Absolute path**: Start with `/`

- `/usr/share/bin`
- `/home1/student/stud112/s11200`

</v-click>

<v-click>

**Relative path**: Path relate to current directory.

- If current dir is `/usr`
- `test/bin` => `/usr/test/bin`
- `li/public` => `/usr/li/public`

</v-click>

<div class="gradient-bg"></div>

---

# Basic UNIX Command

- `cd` change to specific directory

```bash sh
cd
cd code/test
cd ./test
cd /usr/share
cd ..
cd ../test
```

- `ls` list files in specific directory.

```bash
ls
ls -l  # list files details in current directory.
ls -a  # list all files (include hidden files).
ls -la # Both of listing all files with details
```

<div class="gradient-bg"></div>

---

# Basic UNIX Command

## How to create/delete/copy files or directories?

```bash
touch a.txt
# Create an empty file named "a.txt" in current directory.
mkdir test
# Create a directory named "test" in current directory.
cp fileX dirY/dirZ
# Copy fileX from current directory to ./dirY/dirZ
cp fileX dirY/fileZ
# Copy fileX from current directory to dirY and rename to fileZ.
cp -r dirX dirY
# Copy dirX from current directory to dirY.
# If dirY doesn't exist, dirY is a copy of dirX.
# If dirY is a directory then there will be a copy of dirX under dirY.
```

<div class="gradient-bg"></div>

---

# Basic UNIX Command

## How to create/delete/copy files or directories?

```bash
mv fileA dirB
# Move fileA to dirB.
mv dirA dirB
# If dirB exist, then move dirA under dirB.
# If dirB does not exist, dirA is rename to dirB.
rm fileA
# Remove file fileA (Only for file)
rm -r dirA
# Remove directory dirA and all its contents
rm -rf dirB
# Remove directory dirB and all its contents with force, use with caution.
```

<div class="gradient-bg"></div>

---

# Basic UNIX Command

### **Your Round**

1. Please create a directory named "1112cp1" <v-click>`mkdir 1112cp1`</v-click>
2. Enter directory "1112cp1" <v-click>`cd 1112cp1`</v-click>
3. Please create a directory named "abc" <v-click>`mkdir abc`</v-click>
4. Please rename "abc" to "xyz" <v-click>`mv abc xyz`</v-click>
5. Copy "xyz" and rename it as "jqk" <v-click>`cp -r xyz jqk`</v-click>
6. Please delete directory "xyz" and "jqk" <v-click>`rm -r xyz jqk`</v-click>

<div class="gradient-bg"></div>

---

# Basic UNIX Command

### **Recap**

- Use `mkdir` to create a directory
- Use `mv` to move a directory/file or rename a directory/file
- Use `cp` to copy a file and `cp -r` to copy a directory
- Use `rm` for removing file and `rm -r` for removing directory

<div class="gradient-bg"></div>

---

# Basic UNIX Command - Others

- The path used on `cp`, `mv`, `rm`, `mkdir` can be absolute path or relative path.
- Use `echo $PWD` to see what the current directory is.
- Use `whoami` to see your account's name.
- Use `logout` to logout the system. (you can press <kbd>Ctrl</kbd>+<kbd>D</kbd> either)
- Type `clear` to clean your screen (you can press <kbd>Ctrl</kbd>+<kbd>L</kbd> either)
- Remember, whenever you have problems using commands, try "man" command.
  - Press q to exit man page.

```bash
man ls
man cp
# man stands for manual.
```

<div class="gradient-bg"></div>

---

# Basic Vim

- Vim is a text editor that you can write texts, codes just like notepad.exe
- To use it, you just need to type `vim` with a filename folowing it, e.g. `vim test.txt`
  > If the file doesn't exist, Vim will create one. Otherwise, it will open it.

<div class="flex justify-center py-5">
  <img src="/vim.png" class="h-80" />
</div>

<div class="gradient-bg"></div>


---
layout: two-cols
---

# Basic Vim

- Vim basically has three modes:
  - Normal Mode:
    - Navigate, Search, Replace, Copy, Paste
  - Insert Mode:
    - Typing
  - Command-Line Mode:
    - Read, Write File...

::right::

<div class="bg-white pa-2 rounded-2 mt-20">
  <img src="https://raw.githubusercontent.com/nilp0inter/Vim-for-Muggles/master/modes.png" />
</div>

<div class="gradient-bg"></div>

---
layout: two-cols
---

# Basic Vim

#### Suppose you are writing your first programm.
1. Vim starts in normal mode.
2. Press <kbd>i</kbd> to change to Insert mode.
3. \*Smashing Keyboard\*
4. Press <kbd>ESC</kbd> back to normal mode.
5. Press <kbd>:</kbd> or <kbd>/</kbd> to enter command-line mode. (Save, open file, search text, indenting etc.)

```c
#include <stdio.h>

int main() {
  printf("Hello world!");

  return 0;
}
```

::right::

<v-click>

![](https://gifdb.com/images/high/angry-cat-typing-t5o9zj8q393y1tkc.gif)

</v-click>

<div class="gradient-bg"></div>

---

# Basic Vim

1. In the normal mode of vim, press <kbd>i</kbd> to insert mode and type some texts.
2. When you have done our work, press <kbd>ESC</kbd> back to normal mode.
3. Type `:w xxx.txt` to save our work to `xxx.txt`
4. Type `:q` to exit vim.
5. Use `:q!` to quit Vim forcibly no matter if you have written your files.
  > If you quit without saving you will get a warning, using this will quit without warning.
6. Use `:x` or `:wq` to write your file and quit Vim with only one command.
7. Use `:!` to commaand shell command in VI, e.g. `:!ls`
8. Use `:xxx` to move cursor to the specific line.
  > xxx is the line number

<div class="gradient-bg"></div>

---

# Basic Vim 

### **Your Round**

1. Please open / create a file named "test.txt". <v-click>`vim test.txt`</v-click>
2. Please insert "hello world". <v-click> <span><kbd>i</kbd> -> Type `hello world`</span> </v-click>
3. Please save the file. <v-click>`:w`</v-click>
4. Please quit the file. <v-click>`:q`</v-click>

<div class="gradient-bg"></div>

---

# First step into C

```c
#include <stdio.h>

int main() {
  int x;
  scanf("%d", &x);
  x = x + 2;
  printf("%d\n", x);
  return 0;
}
```

- `#include <stdio. h>` is for preprocessor
- `int main(){...}` => main function
- `scanf` => input
- `printf` => output
- `return 0` => no error

<div class="gradient-bg"></div>

---

# Compile

- `make` if yout have `Makefile`
  - Like a script. It runs `gcc` automatically.
- `gcc` GNU compiler
  ```sh
  gcc xx.c
  ```
  - It will compile `xx.c` and generate the executable file `a.out`.
  - Or dump a lot of errors.
- `llvm` in mac.

> OJ and ghost use GNU gcc. Mac users are suggested to install GNU gcc.

- Then type `./a.out` to execute your program.
- `./a.out < 1.in` pipes things in `1.in` as stdin to your program.

<div class="gradient-bg"></div>

---

# How to Lock Your Directory?

1. Create a directory named `1121cp1` at your home directory

   ```bash
   mkdir ~/1121cp1
   cd ~
   ```

2. Enter `chmod -R 700 1121cp1` to lock your directory.

<div class="gradient-bg"></div>

---

# Unix File Permissions

- There are 3 levels:
  - Owner => You
  - Group => Accounts in the same group, say, stud111
  - Others => Other guys…

- For each level, you can set it permissions:
  - Read \(r\)
  - Write (w)
  - Execute (x)

<div class="gradient-bg"></div>

---

# Unix File Permissions

#### Take a look at following `ls -l` output:
- `s10940` is the <span class="text-red">owner</span>
- `stud109` is the <span class="text-red">group</span>
- The first letter will show `-` or `d` which are representing a `file` or a `directory` separately.

```bash
[s10940] ~ $ ls -l
total 8333
drwx------  24 s10940   stud109       24 Mar 15  2021 1091cp1
drwxr-xr-x   3 s10940   stud109       20 Nov 22  2021 EstAssign3
drwxrwxr-x   3 s10940   stud109        4 Jan  6  2021 Gitbash
drwx------   2 s10940   stud109        2 Oct 22  2020 Mail
drwx------  15 s10940   stud109       16 Feb 28  2021 NCCUOJ
-rwxrwxr-x   1 s10940   stud109     9624 Mar 29 11:38 a.out
drwxr-xr-x   3 s10940   stud109       16 Dec 27  2021 as7
-rw-------   1 s10940   stud109  1774263 Mar 29 10:58 core
drwxrwxr-x   4 s10940   stud109        4 Oct 25  2021 diff
...
```

<div class="gradient-bg"></div>

---
layout: two-cols
---

# Unix File Permissions

- The following 9 letters like `rwxr-----` indicates the <span class="text-red">file's permission</span>
- The <span class="text-green">first</span> 3 letters indicate the permission of <span class="text-green">owner</span>
  - In case `rwx`, it means user `s10940` can read, write, and execute.
- The <span class="text-blue">middle</span> 3 letters indicate the permission of <span class="text-blue">group</span>
  - In case `r-x`, it means the users in group `stud109` can read, execute, but not write.
- The <span class="text-red">last</span> 3 letters indicate the permission of <span class="text-red">others</span>
  - In case `r--`, it means others can only read.

::right::

<div class="bg-white pa-2 rounded-2 mt-10">
  <img src="/permissions.png" />
</div>

<div class="gradient-bg"></div>

---

# Data Types

### Implicit type conversion
```c
int number = 10;
printf("%d\n", number/3); // 3 (why?)
```

### Explicit type conversion(cast)
```c
int num = 3;
float fnum = 3.5;
float sum;
sum = (float)num + fnum;
```

<div class="gradient-bg"></div>

---

# Operators

### Arithmetic Operator

- `=`

  ex: `x = 1`, `y = 2`, `x = y = 3`
- `+`, `-`, `*`, `/`

  ex: `x = a + 1`, `x = x + a`, `x += 1`

- `%`: Module operator
  
  ex: `x = 5 % 3`

- `++`, `--`: Increase/Decrease operator increases/decreases the integer value by one

  ex: `i++`, `--j`

<div class="gradient-bg"></div>

---

# Operators

### Relational Operator

- `==`, `!=`: Checks if the values of two operands are equal or not.

  ex: `a == b`, `x != y`
- `>`, `<`: Checks if the value of left operand is greater/less than the value of right operand.

  ex: `a > b`, `c < d`
- `>=`, `<=`: Checks if the value of left operand is greater/less than or equal to the value of right operand.

  ex: `a >= b`, `c <= d`

<div class="gradient-bg"></div>

---

# Operators

### Logical Operator:

- `&&`: Logical AND operator

  ex: `A && B`
- `||`: Logical OR operator

  ex: `A || B`
- `!`: Logical NOT operator

  ex: `!(A && B)`

<div class="gradient-bg"></div>

---

# ex02
[Rectangle Area +](https://oj.ebg.tw/contest/115/problem/ex02)

As you may have done last week, you already know how to calculate the area of a rectangle. In this situation, this task may not be too hard for you.

This time, I will give you the coordinates of 8 vertices from two rectangles. Please tell me which rectangle is bigger.

<img src="https://oj.ebg.tw/public/upload/c38b40df4b.png" class="h-58" />

<div class="gradient-bg"></div>

---

# ex02
Input

There are 2 lines of input, in which of each line consists of 8 numbers, representing the coordinates of a rectangle. The vertices are given in clockwise order and the given numbers are all double floats.

For example, as shown in the above picture, A(-2.5, 0), B(0.5, 4), C(4.5, 1), D(1.5, -3), E(3, -2), F(-3, -2), G(-3, 2), H(3, 2), the input is the following:

```tex
(-2.5, 0), (0.5, 4), (4.5, 1), (1.5, -3)
(3, -2), (-3, -2), (-3, 2), (3, 2)
```

- for point $P_n(x_n, y_n)$
  - $1 \le n \le 8$, $n \in N$
  - $-2000 \le \{x_n, y_n\} \le 2000$, $x \in R$

<div class="gradient-bg"></div>

---

# ex02
Output

In the first line, please print the area of rectangle A.
In the second line, please print the area of rectangle B.

For the rectangle area:
- If area is an integer, then print the area with no decimal point.
- If area is an 1 decimal point number, then print the area with 1 decimal point.
- If area is an 2 or more decimal point number, then print the area round off to the 2nd decimal place.

For the third line:
- If area A is bigger than area B, please print "A > B".
- If area A is smaller than area B, please print "A < B".
- If area A is same as area B, please print "A = B".

<br />

> Note that every line should have `\n` (Including the third one!!!)

<div class="gradient-bg"></div>

---
layout: cover
---

# Thanks for listening

<div class="gradient-bg"></div>