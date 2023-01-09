<script setup lang="ts">
const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: []
  },
  value: {
    type: String,
    required: true,
    default: -1
  },
  mode: {
    type: String,
    required: true,
    default: 'id'
  }
})

const emits = defineEmits(['input'])

const inputVal = computed({
  get: () => props.value,
  set: (val: string) => emits('input', val)
})
</script>

<template>
  <select
      v-model='inputVal'
      class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
    <option value="-1" disabled selected>Sélectionnez une option</option>
    <template v-if="props.options.length > 0">
      <template v-if="props.mode === 'id'">
        <option v-for="(item, index) of props.options" :key="index" :value="item.id">
          {{ item.name[0].toUpperCase() + item.name.slice(1).toLowerCase() }}
        </option>
      </template>
      <template v-else-if="props.mode === 'name'">
        <option v-for="(item, index) of props.options" :key="index" :value="item.name">
          {{ item.name[0].toUpperCase() + item.name.slice(1).toLowerCase() }}
        </option>
      </template>
    </template>
  </select>
</template>