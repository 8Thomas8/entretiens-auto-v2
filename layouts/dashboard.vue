<script setup lang="ts">
import { Ref } from '@vue/reactivity'

useHead({
    bodyAttrs: {
        class: 'overflow-hidden'
    }
})

const menuStatus: Ref<boolean> = ref(false)
const showAddVehicle: Ref<boolean> = ref(false)
const showDeleteModal: Ref<boolean> = ref(false)

const toggleMenu = () => {
    menuStatus.value = !menuStatus.value
}

const toggleAddVehicle = (value: null) => {
    showAddVehicle.value = value || !showAddVehicle.value
}

const toggleDeleteModal = (value: null) => {
    console.log('Layout')
    // TODO Récupérer l'event depuis la page
    showDeleteModal.value = value || !showDeleteModal.value
}
</script>

<template>
    <div>
        <section class="h-screen bg-gray-50">
            <div class="flex h-full">
                <AppMenu
                    @toggle-menu="toggleMenu()"
                    :menu-status="menuStatus" />

                <div class="flex flex-1 flex-col overflow-hidden">
                    <AppHeader
                        @toggle-add-vehicle="toggleAddVehicle($event)"
                        @toggle-menu="toggleMenu()" />
                    <slot
                        @toggle-delete-modal="toggleDeleteModal($event)"
                        :show-delete-modal="showDeleteModal" />
                </div>
            </div>
        </section>

        <!-- Modales -->
        <AppModalesAddVehicle
            @toggle-add-vehicle="toggleAddVehicle($event)"
            :show-add-vehicle="showAddVehicle" />
        <AppModalesDelete
            @toggle-delete-modal="toggleDeleteModal($event)"
            :show-delete-modal.sync="showDeleteModal" />
    </div>
</template>
