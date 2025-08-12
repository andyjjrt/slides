---
theme: default
download: true
transition: slide-up
routerMode: hash
hideInToc: true
mdc: true
fonts:
  sans: Outfit, Noto Sans TC
  mono: Ubuntu Mono
##########################
title: osu
name: test
themeConfig:
  glowHue: 100

layout: iframe

# the image source
url: /osu.mp4
---

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: iframe-left
# the web page source
url: /ruby.webm
preload: false
---

# osu!

- Start from 2007
- Open Sourced, written in C#
- Contains 
  - **osu!**
  - osu!taiko
  - osu!CatchtheBeat
  - osu!mania
- Huge Community


---
layout: image-right
image: /how_to_play.jpg
backgroundSize: contain 
---

# How to play
- Move your mouse to the circle when the shrinking approach circle lines up with the hit circle’s border.
- Follow the slider
- Spin the spinner
- Mods for pp multiplier or just for fun
  - Hidden (HD)
  - Double Time (DT)
  - Hard Rock (HR)
  - Flashlight (FL)
  - etc.

---
layout: image-right
image: /pp.png
backgroundSize: contain 
---

# How to Score

- Score: No one cares
- Performance Point (PP): Measuring how skilled you are
  - The way osu! rank players
- Calculated from top plays
- But PP are calculated by system...

---
layout: full
preload: false
---

<div grid grid-cols-2 class="h-2/3">

<div>
<iframe src="/bad_pp.mp4" class="w-full h-full" />
<p v-click="1" text-4xl>197PP, 1:30, Harder</p>
</div>

<div>
<iframe src="/good_pp.mp4" class="w-full h-full" />
<p v-click="1" text-4xl>189PP, 1:00, Easy</p>
</div>

</div>

---
layout: iframe
url: /100acc.mp4
preload: false
---