<template>
  <form>
    <div class="overflow-hidden">
      <div class="bg-white py-5 sm:py-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label for="builder" class="block text-sm font-medium text-gray-700">Constructeur</label>
            <select id="builder" name="builder" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
              <option>Nissan</option>
              <option>Peugeot</option>
            </select>
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="name-model" class="block text-sm font-medium text-gray-700">Modèle</label>
            <input type="text" name="name-model" id="name-model" autocomplete="name-model" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="energy" class="block text-sm font-medium text-gray-700">Energie</label>
            <select id="energy" name="energy" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
              <option>Diesel</option>
              <option>Essence</option>
            </select>
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="km-number" class="block text-sm font-medium text-gray-700">Kilométrage</label>
            <input type="text" name="km-number" id="km-number" autocomplete="km-number" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          </div>
        </div>
      </div>
    </div>
  </form>
</template>