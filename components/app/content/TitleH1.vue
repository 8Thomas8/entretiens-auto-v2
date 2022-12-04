<script setup lang="ts">
const props = defineProps({
  text: String
})
</script>

<template>
  <h1 class="flex-1 text-2xl font-bold text-gray-900">{{ text }}</h1>
</template>