import {defineStore} from 'pinia'
import {useSupabaseClient} from "#imports"
import {Ref} from "vue"

export const useBuildersStore = defineStore('builders-store', () => {
    const buildersList: Ref<IBuilder[]> = ref([])

    async function getAll() {
        try {
            const {data, error} = await useSupabaseClient().from('builders').select()
            if (error) throw error
            buildersList.value = data
        } catch (error: any) {
            console.error('Impossible de récupérer la liste de constructeurs: ', error.message)
        }
    }

    return {buildersList, getAll}
})