<script setup lang="ts">
import HeaderProfileMenu from "~/components/global/HeaderProfileMenu.vue";

const user = useSupabaseUser()
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
              <HeaderProfileMenu v-else />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>