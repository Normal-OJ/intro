<template>
  <div class="h-screen w-full bg-secondary">
    <div class="w-full h-10 flex items-center bg-primary">
      <img src="../images/logo.png" class="pl-0.5 h-8 cursor-pointer" @click="() => $slidev.nav.go(1)" >
    </div>
    <slot />
  </div>
</template>
