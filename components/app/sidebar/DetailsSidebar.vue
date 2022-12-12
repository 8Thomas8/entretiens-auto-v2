<script setup>
const iconBtn = '<svg class="h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M20.96 16.45C20.97 16.3 21 16.15 21 16V16.5L20.96 16.45M11 16C11 16.71 11.15 17.39 11.42 18H6V19C6 19.55 5.55 20 5 20H4C3.45 20 3 19.55 3 19V11L5.08 5C5.28 4.42 5.84 4 6.5 4H17.5C18.16 4 18.72 4.42 18.92 5L21 11V16C21 13.24 18.76 11 16 11S11 13.24 11 16M8 13.5C8 12.67 7.33 12 6.5 12S5 12.67 5 13.5 5.67 15 6.5 15 8 14.33 8 13.5M19 10L17.5 5.5H6.5L5 10H19M22.87 21.19L18.76 17.08C19.17 16.04 18.94 14.82 18.08 13.97C17.18 13.06 15.83 12.88 14.74 13.38L16.68 15.32L15.33 16.68L13.34 14.73C12.8 15.82 13.05 17.17 13.93 18.08C14.79 18.94 16 19.16 17.05 18.76L21.16 22.86C21.34 23.05 21.61 23.05 21.79 22.86L22.83 21.83C23.05 21.65 23.05 21.33 22.87 21.19Z" /></svg>'

const emit = defineEmits(['closeSidebar', 'toggleDeleteModal'])

const props = defineProps({
  selectedVehicle: {
    type: Object,
    default: () => ({}),
    required: true
  }
})

const closeSidebar = () => {
  emit('closeSidebar')
}

const emitToggleDeleteModal = () => {
  emit('toggleDeleteModal', props.selectedVehicle)
}
</script>

<template>
  <aside class="w-full h-full md:border-l md:border-gray-200 bg-white p-8 block relative">
    <div class="fixed top-2">
      <button @click="closeSidebar()" class="-ml-6 flex items-center rounded-md bg-white p-1 text-indigo-600 hover:text-indigo-500 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <span class="ml-1 text-sm font-medium">Fermer</span>
      </button>
    </div>
    <div class="flex flex-col w-full h-full space-y-6 pb-16">
      <div>
        <div class="h-[200px] block w-full overflow-hidden rounded mt-6">
          <img
              src="~/assets/images/placeholder/vehicle.jpg"
              alt="" class="h-full w-full object-cover">
        </div>
        <div class="mt-4">
            <h2 class="text-lg font-medium text-gray-900">
              Leaf 2021.5
            </h2>
            <p class="text-sm font-medium text-gray-500">Nissan</p>
        </div>
        <div class="mt-4">
          <AppBtnPrimary :iconSvg="iconBtn" content="Gestion des entretiens"/>
        </div>
      </div>

      <div class="grow">
        <h3 class="font-medium text-gray-900">Information</h3>
        <dl class="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
          <div class="flex justify-between py-3 text-sm font-medium">
            <dt class="text-gray-500">Kilométrage</dt>
            <dd class="whitespace-nowrap text-gray-900">20 000</dd>
          </div>

          <div class="flex justify-between py-3 text-sm font-medium">
            <dt class="text-gray-500">Energie</dt>
            <dd class="whitespace-nowrap text-gray-900">Electrique</dd>
          </div>

          <div class="flex justify-between py-3 text-sm font-medium">
            <dt class="text-gray-500">Date de création</dt>
            <dd class="whitespace-nowrap text-gray-900">22/10/2022</dd>
          </div>

          <div class="flex justify-between py-3 text-sm font-medium">
            <dt class="text-gray-500">Date de mise à jour</dt>
            <dd class="whitespace-nowrap text-gray-900">22/10/2022</dd>
          </div>

        </dl>
      </div>

      <div class="flex space-x-2">
        <AppBtnPrimary content="Modifier" />
        <AppBtnSecondary @click="emitToggleDeleteModal()" content="Supprimer" />
      </div>
    </div>
  </aside>
</template>