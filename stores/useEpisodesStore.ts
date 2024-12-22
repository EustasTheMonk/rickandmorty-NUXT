import {defineStore} from "pinia";
import {ref, computed} from 'vue';

export const useEpisodesStore = defineStore('episodes', () => {
    const episodes = ref({})
    const episodesList = computed(() => {
        const episodesArr = [];
        for (const key in episodes.value) {
            episodesArr.push(...episodes.value[key])
        }
        return episodesArr
    })

    const availableEpisodesPage = ref(0)

    const fetchEpisodes = async (page) => {
        const episodesResponse = await $fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
        console.log(episodesResponse.info.pages)
        availableEpisodesPage.value = episodesResponse.info.pages
        console.log(availableEpisodesPage.value)
        episodes.value[page] = episodesResponse.results
        await fetchRestEpisodes()
    }

    const fetchRestEpisodes = async () => {
        let counter = 1;
        let links = [];

        while (counter <= availableEpisodesPage.value) {
            if (episodes.value[counter.toString()]) {
                counter++
                continue;
            }

            links.push(`https://rickandmortyapi.com/api/episode/?page=${counter}`);
            counter++
        }

        const fetchesArray = links.map(async (url) => {
            return await $fetch(url)
        })

        const restEpisodesResponse = await Promise.all(fetchesArray)

        console.log(availableEpisodesPage.value)

        restEpisodesResponse.forEach(episodesPage => {
            if (episodesPage.info.prev !== null) {
                const page = +episodesPage.info.prev.match(/\?page=(\d+)/)[1] + 1
                episodes.value[page] = episodesPage.results
            } else {
                episodes.value[1] = episodesPage.results
            }
        })

        console.log('done')

    }

    return {
        episodes,
        availableEpisodesPage,
        episodesList,
        fetchEpisodes,
        fetchRestEpisodes,
    }
})