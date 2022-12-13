<script setup lang="ts">
const props = defineProps({
    type: {
        type: String,
        required: false,
        default: 'default'
    },
    content: {
        type: String,
        required: true,
        default: ''
    },
    iconSvg: {
        type: String,
        required: false,
        default: null
    }
})

const returnColors = () => {
    let classes: string
    switch (props.type) {
        case 'red':
            classes = 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
            break
        default:
            classes = 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
    }

    return classes
}
</script>

<template>
    <button
        type="button"
        class="inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:col-start-2 sm:text-sm" :class="returnColors()">
        <span
            v-if="iconSvg"
            v-html="iconSvg"
            class="mr-2" />
        {{ content }}
    </button>
</template>
