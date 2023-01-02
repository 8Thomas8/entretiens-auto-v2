<script setup lang="ts">
import { useVehiclesStore } from '~/store/vehicles'

definePageMeta({ layout: 'dashboard', middleware: 'auth' })

const vehiclesStore = useVehiclesStore()
const vehiclesList = vehiclesStore.vehiclesList

vehiclesStore.getAll()

console.log(vehiclesList)

const vehicles = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 }
]
const selectedVehicle = ref(null)
const emit = defineEmits(['toggleDeleteModal'])

const setSelectedVehicle = (item: any) => {
    if (item) {
        if (item.id === selectedVehicle.value?.id) selectedVehicle.value = null
        else {
            selectedVehicle.value = null
            setTimeout(() => {
                selectedVehicle.value = structuredClone(item)
            }, 150)
        }
    } else {
        selectedVehicle.value = null
    }
}

const emitToggleDeleteModal = (value: any) => {
    emit('toggleDeleteModal', value)
}
</script>

<template>
    <div class="flex flex-1 items-stretch overflow-hidden">
        <main class="flex-1 overflow-y-auto">
            <div class="px-4 pt-8 sm:px-6 lg:px-8">
                <div class="flex border-b border-gray-200 pb-2">
                    <AtomicTypoH1 :text="'App'" />

                    <AppDisplayMode />
                </div>

                <!-- Gallery -->
                <section
                    class="mt-8 pb-16"
                    aria-labelledby="gallery-heading">
                    <h2
                        id="gallery-heading"
                        class="sr-only">
                        Recently viewed
                    </h2>
                    <ul
                        role="list"
                        class="grid sm:grid-cols-3 md:flex flex-wrap">
                        <li
                            v-for="vehicle in vehicles"
                            :key="vehicle.id"
                            class="w-full min-w-[200px] max-w-[240px] px-6 py-3 mx-auto sm:mx-0 lg:w-1/4">
                            <AppCardsVehicle
                                :vehicle="vehicle"
                                :selected-vehicle="selectedVehicle || {}"
                                @click="setSelectedVehicle(vehicle)" />
                        </li>
                    </ul>
                </section>
            </div>
        </main>

        <!-- Details sidebar -->
        <Transition
            class="transition ease-in-out duration-150 transform w-full md:w-[360px]"
            enter-to-class="translate-x-0"
            enter-from-class="translate-x-full"
            leave-to-class="translate-x-full"
            leave-from-class="translate-x-0">
            <div
                v-if="selectedVehicle"
                class="overflow-y-auto md:relative md:max-w-[450px]">
                <AppSidebarDetailsSidebar
                    :selected-vehicle="selectedVehicle"
                    @close-sidebar="setSelectedVehicle(null)"
                    @toggle-delete-modal="emitToggleDeleteModal($event)" />
            </div>
        </Transition>
    </div>
</template>
