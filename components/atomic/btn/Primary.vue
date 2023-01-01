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
  },
  toRoute: {
    type: String,
    required: false,
    default: null
  },
  toHref: {
    type: String,
    required: false,
    default: null
  },
  btnType: {
    type: String,
    required: false,
    default: null
  },
  isLoader: {
    type: Boolean,
    required: false,
    default: false
  },
  isLoading: {
    type: Boolean,
    required: false,
    default: false
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
  <nuxt-link
      v-if="toRoute"
      :to="toRoute"
      class="inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
      :class="returnColors()">
        <span
            v-if="iconSvg"
            v-html="iconSvg"
            class="mr-2"/>
    {{ content }}
  </nuxt-link>

  <nuxt-link
      v-else-if="toHref"
      :href="toHref"
      :title="content"
      class="inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
      :class="returnColors()">
        <span
            v-if="iconSvg"
            v-html="iconSvg"
            class="mr-2"/>
    {{ content }}
  </nuxt-link>

  <button
      v-else
      :type="btnType || 'button'"
      class="inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
      :class="returnColors()">

        <span
            v-if="iconSvg"
            v-html="iconSvg"
            class="mr-2"/>

    <svg v-if="isLoader && isLoading" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="h-5 mr-2">
      <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="9" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
    </svg>

    <template v-if="!isLoader || isLoader && !isLoading">
      {{ content }}
    </template>
  </button>
</template>
