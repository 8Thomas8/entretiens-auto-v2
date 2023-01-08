<script setup lang="ts">
const props = defineProps({
  content: {
    type: String,
    required: true,
    default: ""
  }
})
</script>

<template>
  <span v-if="props.content" class="text-red-600 text-xs line-clamp-1">{{ props.content }}</span>
</template>