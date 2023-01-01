<script setup lang="ts">
const props = defineProps({
  isALink: {
    type: Boolean,
    required: false,
    default: false
  }
})

</script>

<template>
  <nuxt-link v-if="isALink" to="/" class="flex">
    <span class="sr-only">Entretiens-auto.com</span>
    <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
         alt="Entretiens-auto.com">
  </nuxt-link>

  <div v-else class="flex">
    <span class="sr-only">Entretiens-auto.com</span>
    <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
         alt="Entretiens-auto.com">
  </div>
</template>