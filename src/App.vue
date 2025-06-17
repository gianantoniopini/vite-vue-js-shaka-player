<script setup>
import LoadingMessage from '@/components/LoadingMessage.vue'
</script>

<template>
  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <suspense timeout="0">
        <!-- main content -->
        <component :is="Component" />

        <!-- loading state -->
        <template #fallback>
          <loading-message class="h-screen" />
        </template>
      </suspense>
    </template>
  </router-view>
</template>
