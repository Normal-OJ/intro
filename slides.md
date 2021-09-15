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
  <img class="w-20 mx-auto" src="/NOJ.png">
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
  <p class="mt-10 text-xs text-gray-400">按方向鍵「下」或「右」可以翻頁</p>
</div>

---
layout: noj
---

<Title>介紹</Title>

<ul class="list-inside list-disc">
  <li class="my-3">源自於 108-1 軟體工程的期末專案：Normal Online Judge (NOJ)</li>
  <li class="my-3">開發軟體（網頁服務）、維護現有系統，並實際上線供系上甚至校內外人士使用</li>
  <li class="my-3">是一堂初階服務學習課程，每學年下學期開課，但在上學期即開始招募修課學生</li>
  <li class="my-3">不只是一堂課程：組成學生社群</li>
</ul>

<img src="/meetup.jpeg" class="mt-5 w-2/3">

---
layout: noj
---

<Title>介紹</Title>

<a href="https://noj.tw" target="_blank" rel="noreferrer noopener">https://noj.tw</a>

<div class="mt-3 flex">
  <img class="h-385px w-344px mr-3 border" src="/contributors.png">
  <img class="w-400px h-266px border" src="/nojHW.png">
</div>


---
layout: noj
---

<Title>介紹</Title>

<div class="mt-12 grid grid-cols-2 gap-y-16">
  <div class="flex flex-col items-center">
    <img src="/NOJ.png" class="h-16">
    <span class="text-sm mt-2">Normal Online Judge</span>
  </div>
  <div class="flex flex-col items-center">
    <img src="/pyShare.png" class="h-16">
    <span class="text-sm mt-2">Python 創作分享平台</span>
  </div>
  <div class="flex flex-col items-center">
    <img src="/Examhub.png" class="h-16">
    <span class="text-sm mt-2">師大資工考古題系統</span>
  </div>
  <div class="flex flex-col items-center">
    <img src="/NTR.jpg" class="h-16">
    <span class="text-sm mt-2">師大資工 Telegram Bot</span>
  </div>
</div>

---
layout: noj
---

<Title>招募——修課門檻</Title>

<ul class="list-inside list-disc">
  <li class="my-3">需有開發經驗（例如網頁開發、系統程式、逆向工程、DevOps、UI/UX 等皆可）</li>
  <li class="my-3">不必是大神，但至少有做過任何專案或作品</li>
  <li class="my-3">或曾於開放原始碼社群或專案進行貢獻</li>
  <li class="my-3">具體說明於學期中公告在 FB 專頁</li>
</ul>

<img src="/contribution.png" class="mt-5 w-1/2">

---
layout: noj
---

<Title>招募——我沒有開發經驗的話怎麼辦？</Title>

<ul class="list-inside list-disc">
  <li class="my-3"><del>明年再來</del></li>
  <li class="my-3">學期中在公告資訊時會附帶一個要求的作品，在學期末前完成（自己有作品當然就免了）</li>
  <li class="my-3">做作品時遇到問題可以來社群詢問，大家會盡所能協助你</li>
  <li class="my-3">社群平時會舉辦 meetup，其中有些會分享如何入門專案開發，歡迎來聽</li>
</ul>

<div class="flex justify-end items-end">
<img src="/schedule.png" class="w-200px">
（這是去年的）
</div>

---
layout: noj
---

<Title>連結</Title>

<div>重要重要</div>

<div class="flex justify-between">
<div>
  <div class="mt-9 mb-1 flex items-center">
    <svg class="h-6 w-6 text-black mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
    <span class="mr-2">Normal Online Judge</span>
    (<a href="https://www.facebook.com/noj.tw" target="_blank" rel="noreferrer noopener">https://www.facebook.com/noj.tw</a>)
  </div>
  <div class="my-3 flex items-center">
    <svg class="h-6 w-6 text-black mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
    <span class="mr-2">Normal-OJ</span>
    (<a href="https://github.com/Normal-OJ" target="_blank" rel="noreferrer noopener">https://github.com/Normal-OJ</a>)
  </div>
</div>
<img class="w-30 mr-6 border-2" src="/fbPage.png">
</div>

<img class="mt-6 mr-6 border" src="/nojPage.png">

