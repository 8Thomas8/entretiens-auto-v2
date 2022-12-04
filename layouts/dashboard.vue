<script setup lang="ts">
import {Ref} from "@vue/reactivity";

const showAddVehicle: Ref<boolean> = ref(false);

useHead({
  bodyAttrs: {
    class: 'overflow-hidden'
  }
})

const menuStatus: Ref<boolean> = ref(false)

const emit = defineEmits(['toggleAddMenu', 'toggleAddVehicle'])

const toggleMenu = () => {
  menuStatus.value = !menuStatus.value
}

const toggleAddVehicle = (value: null) => {
  showAddVehicle.value = value || !showAddVehicle.value
}
</script>

<template>
  <div>
    <section class="h-screen bg-gray-50">
      <div class="flex h-full">
        <AppMenu @toggle-menu="toggleMenu()" :menu-status="menuStatus"/>


        <div class="flex flex-1 flex-col overflow-hidden">
          <AppHeader @toggle-add-vehicle="toggleAddVehicle($event)" @toggle-menu="toggleMenu()"/>
          <slot/>
        </div>

      </div>
    </section>

    <!-- Modales -->
    <AppModalesAddVehicle @toggle-add-vehicle="toggleAddVehicle($event)" :show-add-vehicle="showAddVehicle"/>
  </div>
</template>