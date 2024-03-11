---
title: "**Computer Programming 1 Lab**"
layout: cover
transition: slide-left
download: true
mdc: true
hideInToc: true
lineNumbers: true
routerMode: hash
---

# Computer Programming 1

2023/10/03 Andy Hung

<div class="gradient-bg-orange"></div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://slidev.andyjjrt.cc/1121cp1week3" target="_blank"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <bx-bxs-slideshow />
  </a>
</div>

---

# Outline

- WSL
- Configuration File
- Unix command extend
- oj-cli

<div class="gradient-bg-orange"></div>

---
layout: iframe
url: https://andyjjrt.cc
---

---
layout: image-right
image: /WSL.png
backgroundSize: contain
---

# WSL
[WSL Installation](https://www.youtube.com/watch?v=Ny30CxrxW9A)

<v-clicks>

- Can access Windows execution files
- Can use Windows files
- Can setup servers
- Can have multiple sub-system
- Win11 has gWSL
- Can use [Nividia CUDA](https://learn.microsoft.com/en-us/windows/ai/directml/gpu-cuda-in-wsl)
- Some commands may not work ([WSL-kerel](https://github.com/microsoft/WSL2-Linux-Kernel))

</v-clicks>

<div class="gradient-bg-orange"></div>

---

# WSL Installation
[Referene](https://code.visualstudio.com/docs/remote/wsl-tutorial)

### **Prerequisites**
You need Visual Studio Code installed.

### **Install the extension**
The WSL extension enables you to run Visual Studio Code within the Windows Subsystem for Linux (WSL).

![](https://code.visualstudio.com/assets/docs/remote/wsl-tutorial/remote-wsl-extension.png)

<div class="gradient-bg-orange"></div>

---

# WSL Installation

### **Prerequisite check**
With the WSL extension installed, you will see a new Status bar item at the far left.

![remote-status-bar](https://code.visualstudio.com/assets/docs/remote/wsl-tutorial/remote-status-bar.png)

The Remote Status bar item can quickly show you in which context VS Code is running (local or remote) and clicking on the item will bring up the WSL extension commands.

![](https://code.visualstudio.com/assets/docs/remote/wsl-tutorial/wsl-commands.png)

<div class="gradient-bg-orange"></div>

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

<div class="gradient-bg-orange"></div>

---

# WSL Installation

### **Check WSL**
After restarting Windows, you can check that you have WSL enabled by opening a Command Prompt and typing 'wsl'.

![](https://code.visualstudio.com/assets/docs/remote/wsl-tutorial/wsl-check.png)

WSL is enabled, but you haven't installed a Linux distribution yet.

<div class="gradient-bg-orange"></div>

---

# WSL Installation

### **Install a Linux distro**

You install Linux distributions for WSL from the Microsoft Store. You can use the store app, or search for a Linux distro in the Windows search bar. Choose the Linux distribution you want to install (for example Ubuntu) and follow the prompts.

<div class="flex gap-4">
<img src="https://code.visualstudio.com/assets/docs/remote/wsl-tutorial/install-ubuntu.png" />
<img src="https://code.visualstudio.com/assets/docs/remote/wsl-tutorial/linux-terminal.png" />
</div>

<div class="gradient-bg-orange"></div>

<style>
  img { height: 150px; }
</style>

---

# WSL Usage

### **Run In WSL**
In the WSL terminal, make sure you are in the helloWorld folder, and type in 'code .' to launch Visual Studio Code. The '.' argument tells VS Code to open the current folder.

![](https://code.visualstudio.com/assets/docs/remote/wsl-tutorial/launch-code.png)

<div class="gradient-bg-orange"></div>

---

# Before You Update Your Packages...
[Reference](http://note.drx.tw/2012/01/mirror.html)

- Grep your current mirror
```sh
cat /etc/apt/sources.list | grep main | awk '{ print $2 }' | \
cut -d'/' -f3 | sed -n '3P'
```
```sh
tw.archive.ubuntu.com
```

- Change your mirror to nchc's mirror
```sh
sudo sed -i 's/tw.archive.ubuntu.com/free.nchc.org.tw/g' \
/etc/apt/sources.list
```

<div class="gradient-bg-orange"></div>

---

# Useful packages

- apt
- tmux
- build-essential
- screenfetch

<br />

### What if the package is too old

1. Build from scratch
2. Install in your system package folder(`/usr/bin`)
3. Or in your local dirctory(`~/.local/bin`) and export yor path to `$PATH`

<div class="gradient-bg-orange"></div>

---

# Configuration File
- To customize your shell environment and set up different settings and configurations depending on your needs.

| File | Purpose | Execution Time |
| -------- | -------- | -------- |
| .bashrc | Used to set up and configure the Bash shell | Executed every time a new terminal window is opened or a new Bash shell is started |
| .bash_profile | Used to set up environment and configurations when logging in to the system | Executed only when the user logs in to the system |
| .profile | Used to set up environment and configurations when logging in to the system | Executed only when the user logs in to the system |

<div class="gradient-bg-orange"></div>

---

# Configuration File

### Here are some common used things in config file:

- `alias/unalias`: Alias/Unalias a command

  ex: `alias ls="ls -la"`

- `source`: Execute commands from a file in the current shell environment

  ex: `source ~/.zshrc`

- `export`: Export a variable

  ex: `export PATH="$PATH:~/.local/.bin"`

- PS1: Customize your prompt word
  - [PS1 Generator](https://bash-prompt-generator.org/)

<div class="gradient-bg-orange"></div>

---

# Unix Command Extend

- wget: Retrieving files using HTTP, HTTPS, FTP and FTPS
  
  ex: `wget https://wm5.nccu.edu.tw/base/10001/course/10027586/content/03/codes.zip`

- unzip: Unzip a zip file

  ex: `unzip codes.zip`

<div class="gradient-bg-orange"></div>

---

# Unix Command Extend

- `diff`: diff two files's difference
  
  ex: `diff 1.out test.out`

  > Use this when you have trouble in your hw/ex

<div class="gradient-bg-orange"></div>

---

# oj-cli
[github](https://github.com/andyjjrt/oj-cli)

### Installation in ghost
```sh
echo 'alias oj="python2.7 ~s10940/oj-cli/oj.py"' >> ~/.profile
source ~/.profile
```

### Installation in oop
```sh
echo 'alias oj="~s10815/python2.7/bin/python2.7 ~s10940/oj-cli/oj.py"' >> ~/.profile
source ~/.profile
```

<div class="gradient-bg-orange"></div>

---

# oj-cli

### Installation from source code (not avaliable in ghost or oop)
Required python2.7

```sh
git clone https://github.com/andyjjrt/oj-cli.git
cd oj-cli
echo "alias oj='python2.7 $PWD/oj'" >> ~/.bashrc
source ~/.bashrc
```

<div class="gradient-bg-orange"></div>

---

# oj-cli

### Login
```sh
$ oj login
Usernme:
Password:
```

### Update
```sh
$ oj update
Target Contest: 1101CP1
Found HomeWork: hw0 [Online Submission]
```

<div class="gradient-bg-orange"></div>

---

# oj-cli

### Submit

```txt
$ oj submit hw2 hw2.c
Submit successfully!
Getting submission status...
=================================================
Result: AC(Accept)              Score: 100
|ID |Status                |   Time|  Mem| Score|
|#1 |AC(Accept)            |    0ms|  2MB|    20|
|#2 |AC(Accept)            |    2ms|  2MB|    20|
|#3 |AC(Accept)            |   40ms|  2MB|    20|
|#4 |AC(Accept)            |   75ms|  2MB|    20|
|#5 |AC(Accept)            |    5ms|  2MB|    20| 
================================================= 
```

<div class="gradient-bg-orange"></div>

---

# oj-cli

### Status
```txt
$ oj status hw2
============================================================================
|  Contest Name: hw2                                                       |
============================================================================
|User        |Status                     |   Time|  Mem|               When|
|108xxxxxx   |WA(Wrong Answer)           |    0ms|  2MB|2020-12-18 10:31:12|
|109xxxxxx   |AC(Accept)                 |    0ms|  2MB|2020-12-18 10:07:14|
|109xxxxxx   |PAC(Partial Accepted)      |    0ms|  2MB|2020-12-18 09:20:10|
|109xxxxxx   |PAC(Partial Accepted)      |   21ms|  2MB|2020-12-18 09:20:02|
|109xxxxxx   |PAC(Partial Accepted)      |   17ms|  2MB|2020-12-18 09:07:19|
|109xxxxxx   |PAC(Partial Accepted)      |    1ms|  4MB|2020-12-18 08:50:13|
============================================================================
...
```

<div class="gradient-bg-orange"></div>


---

# oj-cli

### Rank

```txt
$ oj rank hw2
Your status of hw2 : AC(Accept)
================================================
   1~ 10 :  0  |  AC(Accept)             : 8
  11~ 20 :  0  |  RE(Runtime Error)      : 29
  21~ 30 :  0  |  PAC(Partial Accepted)  : 54
  31~ 40 :  1  |  WA(Wrong Answer)       : 81
  41~ 50 :  0  |  CE(Compilation Error)  : 10
  51~ 60 :  0  |--------------------------------
  61~ 70 :  0  |  Total submissions      : 182
  71~ 80 :  0  |
  81~ 90 :  0  |
  91~100 : 12  |
================================================
For real score ranking,please go to the website. 
```

<div class="gradient-bg-orange"></div>

---
layout: cover
---

# Thanks for listening

<div class="gradient-bg-orange"></div>