import {defineStore} from 'pinia'
import {useSupabaseClient} from "#imports"
import {Ref} from "vue"

export const useVehiclesStore = defineStore('vehicles-store', () => {
    const vehiclesList: Ref<IVehicle[]> = ref([])

    async function getAll() {
        try {
            const {data, error} = await useSupabaseClient().from('vehicles').select()
            if (error) throw error
            vehiclesList.value = data
        } catch (error: any) {
            console.error('Impossible de récupérer la liste de véhicules: ', error.message)
        }
    }

    async function deleteOne(vehicle: IVehicle) {
        try {
            const {error} = await useSupabaseClient().from('vehicles').delete().eq('id', vehicle.id)
            if (error) throw error
            vehiclesList.value.splice(vehiclesList.value.indexOf(vehicle), 1)
        } catch (error: any) {
            console.error('Impossible de supprimer le véhicule: ', error.message)
        }
    }

    return {vehiclesList, getAll, deleteOne}
})