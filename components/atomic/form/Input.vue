<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    required: true,
    default: null
  }
})

const emits = defineEmits(['input'])

const inputVal = computed({
    get: () => props.value,
    set: (val: string) => emits('input', val)
})
</script>

<template>
  <input v-model="inputVal"
         class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
</template>