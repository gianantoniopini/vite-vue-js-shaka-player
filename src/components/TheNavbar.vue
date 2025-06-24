<script setup>
import { ref } from 'vue'

const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <nav class="md:flex md:justify-between md:items-center bg-transparent">
    <div class="flex items-center justify-between">
      <RouterLink :to="{ name: 'Home' }" class="text-black dark:text-white">
        <svg viewBox="0 0 100 40.213" class="w-12 h-12 fill-current">
          <polygon points="75.344 20.106 75.344 40.213 0 40.213 0 0 75.344 0" />
          <polygon points="75.344 20.106 100 36.705 100 20.106 100 3.508" />
        </svg>
      </RouterLink>

      <!-- Mobile menu button -->
      <div class="flex md:hidden" @click="toggleMenu">
        <button type="button" class="text-slate-500 dark:text-white">
          <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 text-black/60 dark:text-white"
    >
      <li>
        <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
      </li>
    </ul>
  </nav>
</template>
