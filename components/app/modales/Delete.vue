<script setup lang="ts">
import {useVehiclesStore} from "~/store/vehicles";

const vehiclesStore = useVehiclesStore()

const props = defineProps({
  showDeleteModal: {
    type: Boolean,
    default: false,
    required: true
  },
  element: {
    type: Object,
    required: false,
    default: null
  }
})

const emits = defineEmits(['toggleDeleteModal', 'resultDelete'])

const emitCloseDeleteModal = () => {
  emits('toggleDeleteModal', false)
}

const emitResultDelete = (value: boolean) => {
  emits('resultDelete', value)
}

const deleteVehicle = () => {
  vehiclesStore.deleteOne(props.element as IVehicle).then(() => emitResultDelete(false)).catch(() => emitResultDelete(true))
}
</script>

<template>
  <div>
    <Transition
        class="transition-opacity duration-50 ease-in-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
      <template v-if="props.showDeleteModal">
        <div
            class="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true">
          <div class="fixed inset-0 bg-gray-900 bg-opacity-75"></div>

          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div
                  class="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div>
                    <span class="font-semibold text-xl">Suppression</span>
                  </div>
                  <div class="mt-3 sm:mt-5">
                    <p class="text-sm text-gray-500">
                      Voulez-vous vraiment supprimer cet élément {{ element ? `(${element.name})` : null }} ?
                    </p>
                  </div>
                </div>
                <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <AtomicBtnPrimary
                      type="red"
                      content="Supprimer"
                      @click="deleteVehicle()"
                  />
                  <AtomicBtnSecondary
                      content="Annuler"
                      @click="emitCloseDeleteModal()"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Transition>
  </div>
</template>
