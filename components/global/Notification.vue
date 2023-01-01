<script setup lang="ts">
import {NotificationType} from "~/enum/NotificationType"

const props = defineProps({
  type: {
    type: String,
    required: true,
    default: NotificationType.info
  },
  message: {
    type: String,
    required: true,
    default: 'Aucun message'
  }
})

const emits = defineEmits(['closeNotification'])

const returnColors = (value: String) => {
  const colors = {
    elementClass: '',
    svgClass: '',
    textClass: '',
    btnClass: ''
  }

  switch (value) {
    case NotificationType.info:
      colors.elementClass = 'border-blue-400 bg-blue-50'
      colors.svgClass = 'text-blue-400'
      colors.textClass = 'text-blue-800'
      colors.btnClass = 'bg-blue-50 text-blue-500 focus:ring-blue-600 hover:bg-blue-100 focus:ring-offset-blue-50'
      break
    case NotificationType.warning:
      colors.elementClass = 'border-yellow-400 bg-yellow-50'
      colors.svgClass = 'text-yellow-400'
      colors.textClass = 'text-yellow-800'
      colors.btnClass = 'bg-yellow-50 text-yellow-500 focus:ring-yellow-600 hover:bg-yellow-100 focus:ring-offset-yellow-50'
      break
    case NotificationType.error:
      colors.elementClass = 'border-red-400 bg-red-50'
      colors.svgClass = 'text-red-400'
      colors.textClass = 'text-red-800'
      colors.btnClass = 'bg-red-50 text-red-500 focus:ring-red-600 hover:bg-red-100 focus:ring-offset-red-50'
      break
    case NotificationType.success:
      colors.elementClass = 'border-green-400 bg-green-50'
      colors.svgClass = 'text-green-400'
      colors.textClass = 'text-green-800'
      colors.btnClass = 'bg-green-50 text-green-500 focus:ring-green-600 hover:bg-green-100 focus:ring-offset-green-50'
  }
  return colors
}
</script>

<template>
  <div class="border-l-4 rounded-r-md p-4" :class="returnColors(props.type).elementClass">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
             aria-hidden="true" :class="returnColors(props.type).svgClass">
          <path v-if="props.type === NotificationType.success" fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"/>
          <path v-else-if="props.type === NotificationType.error" fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                clip-rule="evenodd"/>
          <path v-else-if="props.type === NotificationType.warning" fill-rule="evenodd"
                d="M8.485 3.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 3.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"/>
          <path v-else-if="props.type === NotificationType.info" fill-rule="evenodd"
                d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"/>
        </svg>
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium" :class="returnColors(props.type).textClass">{{ props.message }}</p>
      </div>
      <div class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
          <button type="button"
                  class="inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  :class="returnColors(props.type).btnClass"
                  @click="$emit('closeNotification', props.type)">
            <span class="sr-only">Dismiss</span>
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                 aria-hidden="true">
              <path
                  d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>