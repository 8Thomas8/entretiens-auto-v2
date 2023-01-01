<script setup lang="ts">
const user = useSupabaseUser()
const userAuthClient = useSupabaseAuthClient()
const showProfileMenu = ref(false)

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
  <div>
    <div class="relative bg-white shadow">
      <div class="pointer-events-none absolute inset-0 z-30" aria-hidden="true"></div>
      <div class="relative z-20">
        <div
            class="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
          <AtomicLogo :is-a-link="true"/>
          <div class="flex md:flex-1 md:items-center md:justify-end">
            <div class="flex items-center space-x-4 md:ml-12">
              <AtomicBtnPrimary v-if="!user" to-route="/auth/login" content="Se connecter"/>
              <div v-else class="relative shrink-0">
                <div>
                  <AtomicBtnProfileBtn @click="toggleProfileMenu()"/>
                </div>

                <Transition class="transition-all duration-300 ease-in-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                  <div
                      v-if="showProfileMenu"
                      class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <ul>
                      <li>
                        <nuxt-link @click="toggleProfileMenu()" to="/app/profile" class="block px-4 py-2 text-sm text-gray-700" role="menuitem">Mon
                          profil
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link @click="toggleProfileMenu()" class="block px-4 py-2 text-sm text-red-500" role="menuitem" title="Déconnexion"
                                   @click.prevent="logout()">Déconnexion
                        </nuxt-link>
                      </li>
                    </ul>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>