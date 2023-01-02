<script setup lang="ts">
definePageMeta({ layout: 'dashboard', middleware: 'auth' })

const user = useSupabaseUser()
</script>

<template>
  <ul class="space-y-2">
    <li>id: {{user.id}}</li>
    <li>{{user.email}}</li>
  </ul>
</template>