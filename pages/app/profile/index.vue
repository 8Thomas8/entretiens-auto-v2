<script setup lang="ts">
const user = useSupabaseUser()
</script>

<template>
  <ul class="space-y-2">
    <li>id: {{user.id}}</li>
    <li>{{user.email}}</li>
  </ul>
</template>