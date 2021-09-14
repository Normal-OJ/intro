<template>
  <div class="h-screen w-full bg-secondary">
    <div class="w-full h-10 flex items-center bg-primary">
      <img src="../images/logo.png" class="pl-2 h-8 cursor-pointer" @click="() => $slidev.nav.go(1)" >
    </div>
    <div class="h-full w-full flex">
      <div class="w-40 h-full flex flex-col border border-gray-200">
        <div class="py-3 px-5">
          <p class="text-lg">原始碼維護</p>
          <p class="text-sm">服務學習課程介紹</p>
        </div>
        <hr>
        <div class="p-3 flex-col space-y-1">
          <div :class="['hover:bg-blueGray-200 py-2 px-3 rounded flex items-center space-x-5 cursor-pointer', [2, 3, 4].includes($slidev.nav.currentPage) && 'bg-blueGray-200']" @click="() => $slidev.nav.go(2)">
            <svg class="h-5 w-5 text-gray-600"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="4" width="18" height="16" rx="3" />  <circle cx="9" cy="10" r="2" />  <line x1="15" y1="8" x2="17" y2="8" />  <line x1="15" y1="12" x2="17" y2="12" />  <line x1="7" y1="16" x2="17" y2="16" /></svg>
            <span class="text-sm">Intro</span>
          </div>
          <!-- <div :class="['hover:bg-blueGray-200 py-2 px-3 rounded flex items-center space-x-5 cursor-pointer', [5].includes($slidev.nav.currentPage) && 'bg-blueGray-200']" @click="() => $slidev.nav.go(3)">
            <svg class="h-5 w-5 text-gray-600"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="3 7 9 4 15 7 21 4 21 17 15 20 9 17 3 20 3 7" />  <line x1="9" y1="4" x2="9" y2="17" />  <line x1="15" y1="7" x2="15" y2="20" /></svg>
            <span class="text-sm">Roadmap</span>
          </div> -->
          <div :class="['hover:bg-blueGray-200 py-2 px-3 rounded flex items-center space-x-5 cursor-pointer', [5, 6].includes($slidev.nav.currentPage) && 'bg-blueGray-200']" @click="() => $slidev.nav.go(5)">
            <svg class="h-5 w-5 text-gray-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>
            <span class="text-sm">Recruit</span>
          </div>
          <div :class="['hover:bg-blueGray-200 py-2 px-3 rounded flex items-center space-x-5 cursor-pointer', [7].includes($slidev.nav.currentPage) && 'bg-blueGray-200']" @click="() => $slidev.nav.go(7)">
            <svg class="h-5 w-5 text-gray-600"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" /></svg>
            <span class="text-sm">Links</span>
          </div>
        </div>
      </div>
      <div class="flex-1 px-10 py-3 flex flex-col">
        <slot />
      </div>
    </div>
  </div>  
</template>

