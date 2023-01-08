<script setup lang="ts">
const props = defineProps({
    options: {
        type: Array,
        required: true,
        default: []
    }
})
</script>

<template>
    <select class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
        <template v-if="props.options.length > 0">
<!--          <option>TEST</option>-->
          <option v-for="(item, index) of props.options" :key="index" :value="item">{{item.name[0].toUpperCase() + item.name.slice(1).toLowerCase()}}</option>
        </template>
    </select>
</template>