<script setup lang="ts">
import {useAsyncData, useRoute, useRouter} from "#app";
import {ref} from "vue";
import {useEpisodesStore} from "~/stores/useEpisodesStore";

const route = useRoute();
const router = useRouter();

const store = useEpisodesStore()

const currentPage = ref(Number(route.query.page) || 1);

// const { data: episodes } = useFetch(`https://rickandmortyapi.com/api/episode?page=${currentPage.value}`)
const { data: episodes } = useAsyncData('getEpisodes', async () => {
  await store.fetchEpisodes(currentPage.value)
  return store.episodes
})
</script>

<template>
  <div>
    <p @click="console.log(store.episodesList)">asdlist</p>
    <p @click="console.log(store.availableEpisodesPage)">asdepisodes</p>
    <p @click="store.fetchRestEpisodes()">aasdasdsd</p>
  </div>
</template>

<style scoped>

</style>