<script setup lang="ts">
const userAuthClient = useSupabaseAuthClient()
const showProfileMenu = ref(false)
const routes = {
  profile: '/app/profile',
  logout: '/logout'
}


const logout = () => {
  userAuthClient.auth.signOut().then(() => {
    navigateTo('/')
  })
}

const toggleProfileMenu = () => {
  return showProfileMenu.value = !showProfileMenu.value
}
</script>

<template>
  <div class="relative shrink-0">
    <div>
      <AtomicBtnProfileBtn @click="toggleProfileMenu()"/>
    </div>

    <Transition class="transition-all duration-300 ease-in-out" enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100" leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95">
      <div
          v-if="showProfileMenu"
          class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
        <ul>
          <li>
            <nuxt-link @click="toggleProfileMenu()" to="/app/profile"
                       :class="useRoute().path === routes.profile ? 'bg-gray-100' : null"
                       class="block px-4 py-2 text-sm text-gray-700" role="menuitem">Mon
              profil
            </nuxt-link>
          </li>
          <li>
            <nuxt-link @click="toggleProfileMenu()" class="block px-4 py-2 text-sm text-red-500"
                       role="menuitem" title="Déconnexion"
                       @click.prevent="logout()">Déconnexion
            </nuxt-link>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>