<script setup lang="ts">

</script>

<template>
  <div>
    <div class="hidden sm:block">
      <Header/>
    </div>

    <v-main>
      <v-container>
<!--        <transition name="rotate" mode="out-in">-->
            <slot/>
<!--        </transition>-->
      </v-container>
    </v-main>
    <div class="sm:hidden bg-neutral-500 flex justify-center fixed bottom-0 w-[100%] h-[50px]">
      <Navitagion/>
    </div>
    <div class="pt-[50px] sm:hidden"/>
  </div>
</template>

<style scoped>
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>