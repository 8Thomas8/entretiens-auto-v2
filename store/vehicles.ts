import { defineStore } from 'pinia'
import {useSupabaseClient} from "#imports";


export const useVehiclesStore = defineStore({
    id: 'vehicles-store',
    state: () => {
        return {
            vehiclesList: [] as IVehicle[],
        }
    },
    actions: {
        async getAll() {
            try {
                const {data, error} = await useSupabaseClient().from('vehicles').select()
                if (error) throw error
                this.vehiclesList = data
            } catch (error: any) {
                console.error('Impossible de récupérer la liste de véhicules: ', error.message)
            }
        }
    },
    getters: {
        filtersList: state => state.vehiclesList,
    },
})