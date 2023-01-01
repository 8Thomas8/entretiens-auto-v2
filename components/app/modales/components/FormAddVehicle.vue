<script setup lang="ts">
const km = ref('0')
const energies = ['essence', 'diesel']
const builders = ['nissan', 'peugeot']

// Replace all non numerics characters from the km value
watch(km, value => {
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
                        <AtomicFieldLabel
                            forId="builder"
                            label="Constructeur" />
                        <AtomicFieldSelect
                            id="builder"
                            name="builder"
                            :options="builders" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <AtomicFieldLabel
                            forId="name-model"
                            label="Nom" />
                        <AtomicFieldInput
                            type="text"
                            name="name-model"
                            id="name-model"
                            autocomplete="name-model" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <AtomicFieldLabel
                            forId="energy"
                            label="Energie" />
                        <AtomicFieldSelect
                            id="energy"
                            name="energy"
                            :options="energies" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <AtomicFieldLabel
                            forId="km-number"
                            label="Kilométrage" />
                        <AtomicFieldInput
                            v-model="km"
                            type="text"
                            name="km-number"
                            id="km-number"
                            autocomplete="km-number" />
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
