<script setup lang="ts">
const props = defineProps({
  menuStatus: {
    type: Boolean,
    default: false,
    required: true
  }
})

const emit = defineEmits(['toggleMenu'])

const emitToggleMenu = () => {
  emit('toggleMenu')
}
</script>

<template>
  <div>
    <!-- Narrow menu -->
    <div class="hidden w-28 h-full overflow-y-auto bg-indigo-700 md:block">
      <div class="flex w-full flex-col items-center py-6">
        <div class="flex flex-shrink-0 items-center">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company">
        </div>
        <div class="mt-6 w-full flex-1 space-y-1 px-2">
          <AppMenuLinkDesktop text="Véhicules" href="/app" :icon-index="0"/>
          <AppMenuLinkDesktop text="Profile" href="/app/profile" :icon-index="1"/>
        </div>
      </div>
    </div>

    <!--
      Mobile menu
    -->
    <div class="relative z-40 md:hidden" role="dialog" aria-modal="true">
      <Transition class="transition-opacity ease-linear duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
                  leave-to-class="opacity-0" leave-from-class="opacity-100">
        <div v-if="props.menuStatus" class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
      </Transition>
      <Transition class="transition ease-in-out duration-300 transform" enter-to-class="translate-x-0" enter-from-class="-translate-x-full"
                  leave-to-class="-translate-x-full" leave-from-class="translate-x-0">
      <div v-if="props.menuStatus" class="fixed inset-0 z-40 flex">
         <div v-if="props.menuStatus" class="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700 pt-5 pb-4">
            <!--
              Close button, show/hide based on off-canvas menu state.

              Entering: "ease-in-out duration-300"
                From: "opacity-0"
                To: "opacity-100"
              Leaving: "ease-in-out duration-300"
                From: "opacity-100"
                To: "opacity-0"
            -->
            <Transition class="transition ease-in-out duration-300" enter-to-class="opacity-100" enter-from-class="opacity-0" leave-from-class="opacity-100"
                        leave-to-class="opacity-0">
              <div v-if="props.menuStatus" @click="emitToggleMenu()" class="absolute top-1 right-0 -mr-14 p-1">
                <button type="button"
                        class="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white">
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  <span class="sr-only">Close sidebar</span>
                </button>
              </div>
            </Transition>

            <div class="flex flex-shrink-0 items-center px-4">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company">
            </div>
            <div class="mt-5 h-0 flex-1 overflow-y-auto px-2">
              <nav class="flex h-full flex-col">
                <div class="space-y-1">
                  <AppMenuLinkMobile text="Véhicules" href="/app" :icon-index="0"/>
                  <AppMenuLinkMobile text="Profile" href="/app/profile" :icon-index="1"/>
                </div>
              </nav>
            </div>
          </div>
        <div class="shrink-0" aria-hidden="true">
        </div>
      </div>
      </Transition>

    </div>

  </div>
</template>