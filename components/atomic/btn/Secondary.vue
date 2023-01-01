<script setup lang="ts">
const props = defineProps({
    content: {
        type: String,
        required: true,
        default: ''
    }
})
</script>

<template>
    <button
        type="button"
        class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm">
        {{ content }}
    </button>
</template>
