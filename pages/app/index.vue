<script setup lang="ts">
import {useVehiclesStore} from '~/store/vehicles'
import {storeToRefs} from "pinia";
import {Ref} from "@vue/reactivity";

definePageMeta({layout: 'dashboard', middleware: 'auth'})

const vehiclesStore = useVehiclesStore()
const {vehiclesList} = storeToRefs(vehiclesStore)
let selectedVehicle: Ref<IVehicle | null> = ref(null)
const deleteModalIsActive: Ref<boolean> = ref(false)

const setSelectedVehicle = (item: any) => {
  if (item) {
    if (item.id === selectedVehicle.value?.id) selectedVehicle.value = null
    else {
      selectedVehicle.value = null
      setTimeout(() => {
        selectedVehicle.value = item
      }, 150)
    }
  } else {
    selectedVehicle.value = null
  }
}

const showDeleteModal = (value = true) => {
  deleteModalIsActive.value = value
  if(!deleteModalIsActive.value) selectedVehicle.value = null
}

vehiclesStore.getAll()
</script>

<template>
  <div class="flex flex-1 items-stretch overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <div class="px-4 pt-8 sm:px-6 lg:px-8">
        <div class="flex border-b border-gray-200 pb-2">
          <AtomicTypoH1 :text="'App'"/>

          <AppDisplayMode/>
        </div>

        <!-- Gallery -->
        <section class="mt-8 pb-16">
          <ul
              role="list"
              class="grid sm:grid-cols-3 md:flex flex-wrap">
            <li
                v-for="vehicle in vehiclesList"
                :key="vehicle.id"
                class="w-full min-w-[200px] max-w-[240px] px-6 py-3 mx-auto sm:mx-0 lg:w-1/4">
              <AppCardsVehicle
                  :vehicle="vehicle"
                  :selected-vehicle="selectedVehicle || {}"
                  @click="setSelectedVehicle(vehicle)"/>
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
            @toggle-delete-modal="showDeleteModal($event)"/>
      </div>
    </Transition>

    <!-- Delete modale -->
    <AppModalesDelete
        @toggle-delete-modal="showDeleteModal($event)"
        @result-delete="showDeleteModal($event)"
        :show-delete-modal="deleteModalIsActive"
        :element="selectedVehicle"/>
  </div>
</template>
