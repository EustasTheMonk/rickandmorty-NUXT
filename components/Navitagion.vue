<script setup lang="ts">

</script>

<template>
  <div class="w-fit flex">
    <NuxtLink to="/"
              active-class="border-[1.5px] rounded-[12px] border-amber-400 hover:bg-transparent hover:cursor-default"
              class="text-sm sm:flex-row flex-col box-border mr-[10px] hover:bg-neutral-600 transition-all duration-300 flex items-center justify-center px-[10px]">
      <v-icon class="mr-[5px]">mdi-account-group-outline</v-icon>
      CHARACTERS
    </NuxtLink>
    <NuxtLink to="/locations"
              active-class="border-[1.5px] rounded-[12px] border-amber-400 hover:bg-transparent hover:cursor-default"
              class="text-sm sm:flex-row flex-col box-border mr-[10px] hover:bg-neutral-600 transition-all duration-300 flex items-center justify-center w-[100%] px-[10px]">
      <v-icon class=" mr-[5px]">mdi-earth</v-icon>
      LOCATIONS
    </NuxtLink>
    <NuxtLink to="/episodes"
              active-class="border-[1.5px] rounded-[12px] border-amber-400 hover:bg-transparent hover:cursor-default"
              class="text-sm sm:flex-row flex-col box-border hover:bg-neutral-600 transition-all duration-300 flex items-center justify-center w-[100%] px-[10px]">
      <v-icon class="mr-[5px]">mdi-view-list-outline</v-icon>
      EPISODES
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>