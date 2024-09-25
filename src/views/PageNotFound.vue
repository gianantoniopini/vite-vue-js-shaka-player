<template>
  <div class="flex flex-col items-center">
    <h1 class="font-bold text-9xl">404</h1>
    <h2 class="text-2xl">Page not found</h2>
    <RouterLink
      :to="{ name: 'Home' }"
      class="py-2 px-2 md:px-4 rounded inline-block text-gray-600 bg-gray-300 mt-16"
    >
      Back to home
    </RouterLink>
  </div>
</template>
