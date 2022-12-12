<script setup lang="ts">
const km = ref('0')
const energies = ['essence','diesel']
const builders = ['nissan','peugeot']

// Replace all non numerics characters from the km value
watch(km, (value) => {
  const nbRegex = /[^0-9]+/g
  km.value = value.replace(nbRegex, '')
})
</script>

<template>
  <form>
    <div class="overflow-hidden">
      <div class="bg-white py-5 sm:py-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <AppFormFieldLabel forId="builder" label="Constructeur"/>
            <AppFormFieldSelect id="builder" name="builder" :options="builders" />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <AppFormFieldLabel forId="name-model" label="Nom"/>
            <AppFormFieldInput  type="text" name="name-model" id="name-model" autocomplete="name-model"/>
          </div>

          <div class="col-span-6 sm:col-span-3">
            <AppFormFieldLabel forId="energy" label="Energie"/>
            <AppFormFieldSelect id="energy" name="energy" :options="energies" />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <AppFormFieldLabel forId="km-number" label="Kilométrage"/>
            <AppFormFieldInput v-model="km" type="text" name="km-number" id="km-number" autocomplete="km-number"/>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>