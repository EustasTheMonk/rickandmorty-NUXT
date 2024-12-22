<script setup lang="ts">
defineProps({
  character: Object,
})

const getColor = (status) => {
  switch (status) {
    case 'Alive':
      return 'bg-green-600';
    case 'Dead':
      return 'bg-red-600'
    case 'unknown':
      return 'bg-blue-600'
  }
}
</script>

<template>
<NuxtLink :to="`/character/${character.id}`">
<div class="h-[100%] overflow-hidden relative flex  md:flex-row flex-col gap-[15px] align-center rounded-[20px] bg-opacity-80 backdrop-blur-[4px] bg-neutral-500">
  <div  class=" flex  sm:flex-row sm:w-[100%] gap-[15px] sm:px-[0px] sm:py-[0px] flex-col w-fit bg-grey-lighten-1 px-[15px] py-2 rounded-[12px]">
    <img class="max-w-[200px] overflow-hidden rounded-[20px]" :src="character.image" :alt="character.name">
    <div class="grow flex flex-col gap-[10px]">
      <div>
        <p class="underline decoration-blue-600 decoration-2">{{ character.name }}</p>
        <div class="flex items-center gap-[3px]">
          <p>{{ character.species }} - </p>
          <!--                  <div :class="getColor(character.status)" class="w-[7px] h-[7px] rounded-full"/>-->
          <p class="outline-4 outline-green-400">{{ character.gender }}</p>
        </div>
      </div>
      <div class="relative left-0">
        <p class="text-gray-600">Leaving on:</p>
        <p class="">{{ character?.location.name }}</p>
      </div>
      <div>
        <p class="text-gray-600">Originally from:</p>
        <p>{{ character.origin.name }}</p>
      </div>
    </div>
  </div>
  <div :class="getColor(character.status)"
       class="flex justify-center text-center -rotate-45 -top-[35%] overflow-hidden right-[2.5%] min-h-[100%] max-w-[30px] absolute">
    <p class="rotate-90 m-auto">
      {{ character.status }}
    </p>
  </div>
</div>
</NuxtLink>
</template>
<style scoped>

</style>