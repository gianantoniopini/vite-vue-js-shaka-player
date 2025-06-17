<script setup>
import Navbar from '@/components/TheNavbar.vue'
</script>

<template>
  <div class="flex flex-col gap-5">
    <header>
      <navbar />
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>
