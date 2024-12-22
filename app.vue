<template>
  <v-app class="main">
    <NuxtLoadingIndicator/>
    <NuxtLayout>
<!--      <transition name="slide-fade">-->
      <NuxtPage/>
<!--      </transition>-->
    </NuxtLayout>
  </v-app>
</template>

<script setup lang="ts">
</script>

<style scoped>
  .main {
    background-attachment: fixed;
    background-image: url("https://wallpapers.com/images/featured/cool-rick-and-morty-2qy1xyshw0h9uxk4.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 0.5s ease;
  }
  .slide-fade-enter-from {
    transform: translateX(100%);
  }
  .slide-fade-leave-to {
    transform: translateX(-100%);
  }
</style>
