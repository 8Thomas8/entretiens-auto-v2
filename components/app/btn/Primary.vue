<script setup lang="ts">
const props = defineProps({
    content : {
        type: String,
        required: true,
        default: ""
    },
    iconSvg : {
        type: String,
        required: false,
        default : null
    }
})
</script>

<template>
    <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm">
        <span v-if="iconSvg" v-html="iconSvg" class="mr-2" />
        {{content}}
    </button>
</template>