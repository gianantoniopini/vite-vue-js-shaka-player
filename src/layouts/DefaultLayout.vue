<script setup>
import Navbar from '@/components/TheNavbar.vue'
</script>

<template>
  <div class="flex flex-col gap-8">
    <header>
      <Navbar />
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>
