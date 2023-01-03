<script setup>
const props = defineProps({
  selectedVehicle: {
    type: Object,
    default: null,
    required: true
  },
  vehicle: {
    type: Object,
    default: null,
    required: true
  }
})

const vehicleKmFormatted = computed(() => props.vehicle.km.toLocaleString('fr-FR'))
</script>

<template>
  <div class="relative w-full">
    <div
        class="h-[200px] group block w-full h-full rounded-lg bg-gray-100 overflow-hidden"
        :class="props.selectedVehicle?.id !== props.vehicle.id ? null : 'ring-2 ring-offset-2 ring-indigo-500'">
      <img
          src="~/assets/images/placeholder/vehicle.jpg"
          alt="" class="object-cover pointer-events-none w-full h-full"
          :class="props.selectedVehicle?.id !== props.vehicle.id ? 'group-hover:opacity-75' : null">
      <button type="button" class="absolute inset-0 focus:outline-none">
        <span class="sr-only">View details for IMG_4985.HEIC</span>
      </button>
    </div>
    <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
      {{ vehicle.name }}</p>
    <p class="pointer-events-none block text-sm font-medium text-gray-500">{{ vehicleKmFormatted }} km</p>
  </div>
</template>