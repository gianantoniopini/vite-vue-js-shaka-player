<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <section class="flex flex-col gap-8">
      <header class="flex flex-col gap-6 items-center">
        <h1 class="text-2xl md:text-3xl font-bold">About Vite Vue JS Shaka Player</h1>
        <p class="text-lg md:text-xl opacity-90">
          Simple Vue application using Vite, JavaScript and Shaka Player
        </p>
      </header>

      <div class="flex flex-col gap-4 text-left">
        <p>
          This project is intended as a basic example of how to integrate Shaka Player into a Vue
          application using Vite and JavaScript.
        </p>
        <p>
          All the source code for this project is available
          <a
            href="https://github.com/gianantoniopini/vite-vue-js-shaka-player"
            target="_blank"
            rel="noreferrer"
            >here <img src="@/assets/externalLink.svg" alt="External link" class="inline" /></a
          >.
        </p>
      </div>
    </section>
  </DefaultLayout>
</template>
