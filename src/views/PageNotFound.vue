<script setup>
import BlankLayout from '@/layouts/BlankLayout.vue'
</script>

<template>
  <BlankLayout>
    <div class="flex flex-col items-center">
      <h1 class="font-bold text-9xl">404</h1>
      <h2 class="text-2xl">Page not found</h2>
      <RouterLink v-slot="{ href, navigate }" :to="{ name: 'Home' }" class="mt-16" tabindex="-1">
        <button :href="href" @click="navigate">Back to home</button>
      </RouterLink>
    </div>
  </BlankLayout>
</template>
