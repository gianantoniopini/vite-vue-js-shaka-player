<script setup>
import BlankLayout from '@/layouts/BlankLayout.vue'
</script>

<template>
  <BlankLayout>
    <div class="flex flex-col gap-16">
      <header>
        <h1 class="font-bold text-9xl">404</h1>
        <h2 class="text-2xl">Page not found</h2>
      </header>
      <RouterLink v-slot="{ href, navigate }" :to="{ name: 'Home' }" tabindex="-1">
        <button :href="href" @click="navigate">Back to home</button>
      </RouterLink>
    </div>
  </BlankLayout>
</template>
