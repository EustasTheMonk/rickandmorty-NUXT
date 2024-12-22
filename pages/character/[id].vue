<script setup lang="ts">
import {useAsyncData, useRoute} from "#app";
import {$fetch} from "ofetch";

const route = useRoute()
const id = route.params.id

const { data: character } = await useAsyncData('character-with-episodes', async () => {
  const characterResponse = await $fetch(`https://rickandmortyapi.com/api/character/${id}`);

  const episodeUrls = characterResponse.episode;

  const episodePromises = episodeUrls.map(async (url) => {
    return await $fetch(url);
  });

  const episodes = await Promise.all(episodePromises);

  return {
    character: characterResponse,
    episodes,
  };
});

const openEpisodeGoogle = (episodeName) => {
  const searchFor = encodeURIComponent(`Rick and morty ${episodeName}`)

  window.open(`https://www.google.com/search?q=${searchFor}`, '_blank')
}

</script>

<template>
  <div class="bg-gray-700 bg-opacity-70 backdrop-blur  text-black p-[15px] overflow-hidden rounded-xl">
  <v-btn @click="console.log(character.character)">dasd</v-btn>
    <div class="flex gap-[20px] lg:flex-row flex-col">
      <img :src="character.character.image" :alt="`${character.character.name} image`" class=" lg:w-[40%] md:w-[100%] aspect-square">
      <div>
        <div class="text-gray-600">
          Name:
        </div>
        <div>
         {{ character.character.name }}
        </div>
      </div>
    </div>
    <div class="mt-[10px] text-gray-400">Episodes: </div>
      <ul class="mt-[10px] flex justify-center flex-wrap gap-[10px]">
        <li :key="episode.name" v-for="(episode) in character.episodes">
            <v-btn @click="openEpisodeGoogle(episode.name)" color="primary">{{ episode.episode }}</v-btn>
        </li>
      </ul>
  </div>
</template>

<style scoped>

</style>