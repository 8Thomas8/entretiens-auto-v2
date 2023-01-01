<script setup lang="ts">
const statusProfilDropdown = ref(false)
const statusAddDropdown = ref(false)

const emit = defineEmits(['toggleMenu', 'toggleAddVehicle'])

const toggleStatusProfilDropdown = () => {
  statusProfilDropdown.value = !statusProfilDropdown.value
}

const toggleStatusAddDropdown = (value: boolean | null = null) => {
  statusAddDropdown.value = value || !statusAddDropdown.value
}

const emitToggleMenu = () => {
  emit('toggleMenu')
}

const emitToggleAddVehicle = (value: Boolean) => {
  emit('toggleAddVehicle', value)
  if (value) toggleStatusAddDropdown(false)
}
</script>

<template>
  <header class="w-full">
    <div class="relative z-10 flex justify-end h-16 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm">
      <AppHeaderBurgerBtn @click="emitToggleMenu()"/>

      <div class="flex ml-auto px-4 sm:px-6">
        <div class="flex items-center space-x-4 sm:ml-6 sm:space-x-6">

          <div class="relative flex-shrink-0">
            <AppHeaderAddBtn @click="toggleStatusAddDropdown()"/>

            <Transition class="transition" enter-to-class="transform ease-out duration-100 opacity-100 scale-100"
                        enter-from-class="transform ease-in duration-75 opacity-0 scale-95"
                        leave-to-class="transform ease-in duration-75 opacity-0 scale-95"
                        leave-from-class="transform ease-out duration-100 opacity-100 scale-100">
              <AppHeaderAddDropdownMenu @toggle-add-vehicle="emitToggleAddVehicle($event)" v-if="statusAddDropdown"/>
            </Transition>
          </div>

          <div class="relative flex-shrink-0">
            <AtomicBtnProfileBtn @click="toggleStatusProfilDropdown()"/>

            <Transition class="transition" enter-to-class="transform ease-out duration-100 opacity-100 scale-100"
                        enter-from-class="transform ease-in duration-75 opacity-0 scale-95"
                        leave-to-class="transform ease-in duration-75 opacity-0 scale-95"
                        leave-from-class="transform ease-out duration-100 opacity-100 scale-100">
              <AppHeaderProfilDropdownMenu v-if="statusProfilDropdown"/>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>