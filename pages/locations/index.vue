<script setup lang="ts">
import {useAsyncData, useRoute, useRouter} from "#app";
import {ref} from "vue";

const route = useRoute();
// const router = useRouter();

const currentPage = ref(Number(route.query.page) || 1);

const { data: locations, status } = useAsyncData('locations', async () => {
  return await $fetch(`https://rickandmortyapi.com/api/location?page=${currentPage.value}`)
}, {server: true})
</script>

<template>
      <v-table class="newTest" v-if="locations" density="comfortable" >
        <thead>
        <tr>
          <th @click="console.log(status)" class="text-left text-sm sm:text-lg text-decoration-underline underline-offset-2">
            Name
          </th>
          <th class="text-left text-sm sm:text-lg text-decoration-underline underline-offset-2">
            Type
          </th>
          <th class="text-left text-sm sm:text-lg text-decoration-underline underline-offset-2">
            Dimension
          </th>
        </tr>
        </thead>
        <tbody>
          <tr
              v-for="location in locations.results"
              :key="location.name"
          >
            <td class="text-sm sm:text-base">{{ location.name }}</td>
            <td class="text-sm sm:text-base">{{ location.type }}</td>
            <td class="text-sm sm:text-base">{{ location.dimension }}</td>
          </tr>
        </tbody>
      </v-table>
</template>

<style scoped>
  .newTest {
    background-color: rgba(77,77,77,80%);
    backdrop-filter: blur(7px);
    border-radius: 12px;
  }


</style>