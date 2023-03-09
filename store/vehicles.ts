import {defineStore} from 'pinia'
import {useSupabaseClient} from "#imports"
import {Ref} from "vue"

export const useVehiclesStore = defineStore('vehicles-store', () => {
    const vehiclesList: Ref<IVehicle[]> = ref([])

    async function getAll() {
        try {
            const {data, error} = await useSupabaseClient().from('vehicles').select()
            if (error) throw error

            // Update the list
            vehiclesList.value = data
        } catch (error: any) {
            console.error('Impossible de récupérer la liste de véhicules: ', error.message)
        }
    }

    async function getOne(id: number) {
        try {
            const {data, error} = await useSupabaseClient().from('vehicles').select().eq('id', id)
            if (error) throw error

            // Update the list
            vehiclesList.value = data[0]

            return data[0]
        } catch (error: any) {
            console.error('Impossible de récupérer le véhicule: ', error.message)
        }
    }

    async function createOne(vehicle: IVehicle) {
        try {
            const { error} = await useSupabaseClient().from('vehicles').insert(vehicle)
            if (error) throw error

            // Refresh list
            await getAll()
        } catch (error: any) {
            console.error('Impossible de créer le véhicule: ', error.message)
        }
    }

    async function updateOne(vehicle: IVehicle) {
        try {
            // @ts-ignore
            const {error} = await useSupabaseClient().from('vehicles').update(vehicle).eq('id', vehicle.id)
            if (error) throw error

            // Update the list with data
            vehiclesList.value = vehiclesList.value.map(v => v.id === vehicle.id ? vehicle : v)
        } catch (error: any) {
            console.error('Impossible de mettre à jour le véhicule: ', error.message)
        }
    }

    async function deleteOne(vehicle: IVehicle) {
        try {
            const {error} = await useSupabaseClient().from('vehicles').delete().eq('id', vehicle.id)
            if (error) throw error

            // Remove the vehicle from the list
            vehiclesList.value = vehiclesList.value.filter(v => v.id !== vehicle.id)
        } catch (error: any) {
            console.error('Impossible de supprimer le véhicule: ', error.message)
        }
    }

    return {vehiclesList, getAll, getOne, updateOne, deleteOne, createOne}
})