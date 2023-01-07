<script setup lang="ts">
import {NotificationType} from "~/enum/NotificationType";

const supabase = useSupabaseClient()

const loading = ref(false)
const email = ref('')
const emits = defineEmits(['showNotification'])
const handleLogin = async () => {
  try {
    loading.value = true
    await supabase.auth.signInWithOtp({email: email.value})
    emits('showNotification', {type: NotificationType.success, message: 'Consultez vos emails et cliquez sur le lien pour vous connecter. Pensez à vérifier vos spam.'})
  } catch (error: any) {
    emits('showNotification', {type: NotificationType.error, message: error.error_description || error.message})
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <form class="space-y-6" @submit.prevent="handleLogin()">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Adresse email</label>
        <div class="mt-1">
          <input id="email" name="email" type="email" placeholder="Entrez votre adresse email" v-model="email"
                 autocomplete="email" required
                 class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
        </div>
      </div>

      <div>
        <AtomicBtnPrimary :btnType="'submit'" :disabled="loading"
                          :content="loading ? 'Envoie en cours' : 'Recevoir le lien'" :is-loader="true"
                          :is-loading="loading"/>
      </div>
    </form>
  </div>
</template>
