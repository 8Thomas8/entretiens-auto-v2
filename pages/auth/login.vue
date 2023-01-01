<script setup lang="ts">
import {NotificationType} from "~/enum/NotificationType";
import {Ref} from "@vue/reactivity";

const showSuccessNotification = ref(false)
const showErrorNotification = ref(false)
const successMsg: Ref<string> = ref('')
const errorMsg: Ref<string> = ref('')

const showNotification = (value: { type: string, message: string }) => {
  switch (value.type) {
    case NotificationType.success:
      showSuccessNotification.value = true
      successMsg.value = value.message
      break
    case NotificationType.error:
      showErrorNotification.value = true
      errorMsg.value = value.message

  }
}

const closeNotification = (value: String) => {
  switch (value) {
    case NotificationType.success:
      showSuccessNotification.value = false
      successMsg.value = ""
      break
    case NotificationType.error:
      showErrorNotification.value = false
      errorMsg.value = ""
  }
}

watch(showSuccessNotification, () => {
  if (showSuccessNotification.value) {
    setTimeout(() => {
      showSuccessNotification.value = false
    }, 5000)
  }
})
watch(showErrorNotification, () => {
  if (showErrorNotification.value) {
    setTimeout(() => {
      showErrorNotification.value = false
    }, 5000)
  }
})
</script>

<template>
  <div class="relative">
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">

        <div class="flex justify-center">
          <AtomicLogo :is-a-link="false"/>
        </div>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Connectez-vous</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          avec le lien magique que vous recevrez sur votre adresse email. Accédez à votre compte, sans mot de passe.
        </p>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthLoginForm @show-notification="showNotification($event)"/>
        </div>
      </div>
    </div>

    <section class="absolute left-0 top-4 mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-2">
      <Transition class="ease-in-out transform transition-all" enter-from-class="opacity-0 -translate-y-1"
                  enter-to-class="opacity-100 translate-y-0" leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-1">
        <Notification v-if='showSuccessNotification' :type="NotificationType.success"
                      @close-notification="closeNotification($event)"
                      :message="successMsg"/>
      </Transition>
      <Transition class="ease-in-out transform transition-all" enter-from-class="opacity-0 -translate-y-1"
                  enter-to-class="opacity-100 translate-y-0" leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-1">
        <Notification v-if='showErrorNotification' :type="NotificationType.error"
                      @close-notification="closeNotification($event)"
                      :message="errorMsg"/>
      </Transition>
    </section>
  </div>
</template>