<script setup>
import BlankLayout from '@/layouts/BlankLayout.vue'
</script>

<template>
  <blank-layout>
    <div class="flex flex-col items-center">
      <h1 class="font-bold text-9xl">404</h1>
      <h2 class="text-2xl">Page not found</h2>
      <router-link :to="{ name: 'Home' }" v-slot="{ href, navigate }" class="mt-16" tabindex="-1">
        <button :href="href" @click="navigate">Back to home</button>
      </router-link>
    </div>
  </blank-layout>
</template>
