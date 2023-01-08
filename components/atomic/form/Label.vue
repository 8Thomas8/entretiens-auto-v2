<script setup lang="ts">
    const props = defineProps({
        label: {
            type: String,
            required : true,
            default: ""
        },
        forId: {
            type: String, 
            required: true,
            default: ""
        }
    })
</script>

<template>
    <label :for="forId" class="block text-sm font-medium text-gray-700">{{label}}</label>
</template>