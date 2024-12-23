<script setup lang="ts">
import {refreshNuxtData, useAsyncData, useRoute, useRouter} from "#app";

// import { useRoute, useRouter } from "#app";
import {ref, watch} from "vue";
import {useCharactersStore} from "~/stores/useCharactersStore";

const route = useRoute();
const router = useRouter();

const currentPage = ref(Number(route.query.page) || 1);
const store = useCharactersStore();

const {data: characters} = await useAsyncData('characters', async () => {
  await store.fetchCharacterPage(currentPage.value)
  return store.characters[currentPage.value]
})


function changePage(newPage: number) {
  currentPage.value = newPage;
  router.push({query: {...route.query, page: newPage}}); // Оновлення URL
  refreshNuxtData('characters')
}

const paget = ref(0)

watch(currentPage, (newPage) => {
  currentPage.value = newPage;
  router.push({query: {...route.query, page: newPage}});
  refreshNuxtData('characters');
})

const mikhailenko = toRef(store.characters)

const testtest = () => {
  store.test.forEach(pageOfCharacters => {
        if (pageOfCharacters.info.prev !== null) {
          console.log(...pageOfCharacters.info.prev.match(/\?page=(\d+)/).slice(1))
        }
      }

  )

}

onMounted(() => {
  store.fetchRestCharacters()
})
</script>

<template>
  <div>
    <template v-if="characters">
      <ul class="grid md:grid-cols-2 grid-cols-1 gap-[15px]">
        <li v-for="character in characters" :key="character.id">
          <character-card :character="character" />
        </li>
      </ul>
      <v-pagination  v-model="currentPage" class="w-fit mx-auto rounded-[12px] bg-grey-darken-4 mt-[10px]" total-visible="6"
                    length="42"/>
      <button @click="changePage(currentPage - 1)" class="bg-amber-500 mr-[15px]">prev</button>
      <button @click="changePage(currentPage + 1)" class="bg-amber-500">next</button>
    </template>
    <v-btn @click="changePage(currentPage + 1)">nextPage</v-btn>
    <v-btn @click="console.log(paget)">paget</v-btn>
    <v-btn @click="changePage(currentPage - 1)">prewPage</v-btn>
  </div>
</template>

<style scoped>

</style>