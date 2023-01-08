<script setup lang="ts">
import {Energy} from "~/enum/Energy";

const km = ref('0')
const energies = Object.entries(Energy).map(([key, value]) => ({id: key, name: value}));

const props = defineProps({
  buildersList: {
    type: Array,
    required: true,
    default: () => [] as IBuilder[]
  }
})

// Replace all non numerics characters from the km value
watch(km, value => {
  const nbRegex = /[^0-9]+/g
  km.value = value.replace(nbRegex, '')
})
</script>

<template>
  <div class="overflow-hidden">
    <div class="bg-white py-5 sm:py-6">
      <div class="grid grid-cols-6 gap-6">
        <div class="col-span-6 sm:col-span-3">
          <AtomicFormLabel
              forId="builder"
              label="Constructeur *"/>
          <AtomicFormSelect
              id="builder"
              name="builder"
              :options="buildersList"/>
          <AtomicFormError :content='""'/>
        </div>

        <div class="col-span-6 sm:col-span-3">
          <AtomicFormLabel
              forId="name-model"
              label="Nom *"/>
          <AtomicFormInput
              type="text"
              name="name-model"
              id="name-model"
              autocomplete="name-model"
              required/>
        </div>

        <div class="col-span-6 sm:col-span-3">
          <AtomicFormLabel
              forId="energy"
              label="Energie *"/>
          <AtomicFormSelect
              id="energy"
              name="energy"
              :options="energies"/>
        </div>

        <div class="col-span-6 sm:col-span-3">
          <AtomicFormLabel
              forId="km-number"
              label="Kilométrage *"/>
          <AtomicFormInput
              v-model="km"
              type="text"
              name="km-number"
              id="km-number"
              autocomplete="km-number"/>
        </div>
      </div>
    </div>
  </div>
</template>
