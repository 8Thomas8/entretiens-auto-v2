<script setup>
import {useBuildersStore} from "~/store/builders";
import {useVehiclesStore} from "~/store/vehicles";

const addLoading = ref(false)

const user = useSupabaseUser()


const props = defineProps({
  showAddVehicle: {
    type: Boolean,
    default: false,
    required: true
  }
})

const form = ref({
  created_by: user.value.id,
  updated_by: user.value.id,
  builder: '-1',
  name: '',
  energy: '-1',
  km: ''
})

const vehiclesStore = useVehiclesStore()

const buildersStore = useBuildersStore()
buildersStore.getAll()

const buildersList = computed(() =>buildersStore.buildersList)

const emit = defineEmits(['toggleAddVehicle'])

const onClose = () => {
  emit('toggleAddVehicle', false)
  form.value = {
    created_by: user.value.id,
    updated_by: user.value.id,
    builder: '-1',
    name: '',
    energy: '-1',
    km: ''
  }
}

const onSubmit = () => {
  addLoading.value = true
  vehiclesStore.createOne(form.value).finally(() => {
    addLoading.value = false
    onClose()
  })
}

</script>

<template>
  <div>
    <Transition
        class="transition-opacity ease-in-out duration-50"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
      <template v-if="props.showAddVehicle">

        <div
            class="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true">
          <div class="fixed inset-0 bg-gray-900 bg-opacity-75"></div>
          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <form @submit.prevent="onSubmit()"
                    class="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div>
                    <span class="text-xl font-semibold">Ajouter un véhicule</span>
                  </div>
                  <div class="mt-3 sm:mt-5">
                    <p class="text-sm text-gray-500">
                      Remplissez les informations nécessaires pour créer un véhicule.
                    </p>
                  </div>
                  <div>
                    <AppModalesComponentsFormAddVehicle :form="form" :buildersList="buildersList"/>
                  </div>
                  <div class="flex justify-end">
                    <span class="text-xs">* Champs requis</span>
                  </div>
                </div>
                <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <AtomicBtnPrimary content="Créer" btn-type="submit"/>
                  <AtomicBtnSecondary
                      @click="onClose()"
                      content="Annuler"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </template>
    </Transition>
  </div>
</template>
