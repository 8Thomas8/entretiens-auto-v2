<script setup lang="ts">

const emit = defineEmits(['toggleAddVehicle'])

const emitOpenAddVehicle = () => {
  emit('toggleAddVehicle', true)
}
</script>

<template>
  <div
      class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
    <button @click="emitOpenAddVehicle()" class="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 group"
            role="menuitem">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="inline mr-2 w-5 h-5 text-indigo-600 group-hover:text-indigo-700">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      Ajouter un véhicule
    </button>
    <button class="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 group"
            role="menuitem">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="inline mr-2 w-5 h-5 text-indigo-600 group-hover:text-indigo-700">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      Ajouter un entretien
    </button>
  </div>
</template>