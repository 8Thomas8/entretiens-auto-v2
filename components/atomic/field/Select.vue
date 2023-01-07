<script setup lang="ts">
const props = defineProps({
    options: {
        type: Array<string>,
        required: true,
        default: []
    }
})
</script>

<template>
    <select class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
        <option v-for="(item, index) of props.options" :key="index" :value="item">{{item[0].toUpperCase() + item.slice(1)}}</option>
    </select>
</template>