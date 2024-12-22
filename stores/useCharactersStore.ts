import {defineStore} from "pinia";

export const useCharactersStore = defineStore('characters', () => {
    const characters = ref({})
    const charactersArray = computed(() => {
        const charactersArr = [];
        for (const key in characters.value) {
            charactersArr.push(...characters.value[key])
        }
        return charactersArr
    })
    const pages = ref(0)
    const isLoading = ref(false)
    const error = ref(null)

    const fetchCharacterPage = async (page) => {
        isLoading.value = true
        error.value = null
        if(characters.value[page.toString()]) {
            console.log('this1 is already here')
            return
        }

        try {
            const response = await $fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            characters.value[page.toString()] = response.results
            console.log('it was pinia request for characters')
            pages.value = response.info.pages
            setTimeout(() => {
                fetchRestCharacters()
            }, 10000)
        } catch (err) {
            error.value = 'Помилка завантаження персонажів'
            console.error(err)
        } finally {
            isLoading.value = false
        }
    }



    const fetchRestCharacters = async () => {
        let counter = 1;
        let links = [];

        while(counter <= pages.value) {
            if (characters.value[counter.toString()]) {
                counter++
                continue;
            }

            links.push(`https://rickandmortyapi.com/api/character/?page=${counter}`);
            counter++
        }

        const fetchesArray = links.map(async (url) => {
            return await $fetch(url)
        })

        const restCharactersResponse = await Promise.all(fetchesArray)

        restCharactersResponse.forEach(charactersPage => {
            if (charactersPage.info.prev !== null) {
                const page = +charactersPage.info.prev.match(/\?page=(\d+)/)[1] + 1
                characters.value[page] = charactersPage.results
            } else {
                characters.value[1] = charactersPage.results
            }
        })

    }

    return {
        pages,
        characters,
        fetchCharacterPage,
        fetchRestCharacters,
        charactersArray,
    }
})