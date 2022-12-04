<script setup lang="ts">
const routes = {
  profile: '/app/profile',
  logout: '/logout'
}
</script>

<template>
  <div
      class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
    <!-- Active: "bg-gray-100", Not Active: "" -->
    <nuxt-link :to="routes.profile" class="block px-4 py-2 text-sm text-gray-700"
               :class="useRoute().path === routes.profile ? 'bg-gray-100' : null" role="menuitem">Mon profil
    </nuxt-link>

    <nuxt-link :to="routes.logout" class="block px-4 py-2 text-sm text-red-400"
               :class="useRoute().path === routes.logout ? 'bg-gray-100' : null" role="menuitem">Déconnexion
    </nuxt-link>
  </div>
</template>