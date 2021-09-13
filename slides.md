---
theme: default
layout: cover
highlighter: prism
lineNumbers: false
class: 'font-sans'
fonts:
  sans: 'Lato'
  serif: 'Noto Serif TC'
  mono: 'Fira Code'
---

<div class="text-center pt-24">
  <img class="w-20 mx-auto" :src="`./../images/NOJ.png`">
  <h1 class="mt-4 text-2xl font-bold">初階服務學習課程 - 原始碼維護</h1>
  <h2 class="mt-4">開發與維護正在實際運行的開源服務</h2>
  <div class="mt-3 flex space-x-5 justify-center items-align">
    <span class="rounded text-xs px-2 py-0.5 font-500 text-pink-800 bg-pink-200">#軟體工程</span>
    <span class="rounded text-xs px-2 py-0.5 font-500 text-indigo-800 bg-indigo-200">#開源貢獻</span>
    <span class="rounded text-xs px-2 py-0.5 font-500 text-amber-800 bg-amber-200">#網頁服務</span>
  </div>
  <button class="mt-10 py-2 px-4 rounded text-white bg-primary hover:bg-[#305884] cursor-pointer" @click="$slidev.nav.nextSlide">
    Get Started
  </button>
</div>

---
layout: noj
---

<Title>介紹</Title>

<ul class="list-inside list-disc">
  <li class="my-3" v-click>源自於 108-1 軟體工程的期末專案：Normal Online Judge (NOJ)</li>
  <li class="my-3" v-click>開發軟體（網頁服務）、維護現有系統，並實際上線供系上甚至校內外人士使用</li>
  <li class="my-3" v-click>是一堂初階服務學習課程</li>
  <li class="my-3" v-click>不只是一堂課，是系上喜歡開發的學生們組成的社群</li>
</ul>

<div class="mt-24 flex justify-around items-center">
  <div
    v-for="[img, name] in [['NOJ.png', 'Normal Online Judge'], ['pyShare.png', 'Python 創作分享平台'], ['Examhub.png', '師大資工考古題系統'], ['NTR.jpg', '師大資工 Telegram Bot']]"
    :key="img"
    class="flex flex-col items-center"
  >
    <img :src="`./../images/${img}`" class="h-16">
    <span class="text-sm mt-2">{{ name }}</span>
  </div>
</div>

---
layout: noj
---

<Title>介紹</Title>

<div class="flex">
  <img class="w-344px h-385px" :src="`./../images/contributors.png`">
</div>

---
layout: noj
---

<div class="text-2xl">原始碼維護會怎麼招人的啦</div>

todo todo todo todo<br>
todo todo todo todo<br>
todo todo todo todo<br>
todo todo todo todo<br>
todo todo todo todo<br>
todo todo todo todo<br>
todo todo todo todo<br>
todo todo todo todo<br>

---
layout: noj
---

ggg

---
layout: 'default'
---

# Hi

- A
- B
- C
