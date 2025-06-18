<script setup>
import LoadingMessage from '@/components/LoadingMessage.vue'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Suspense timeout="0">
        <!-- main content -->
        <component :is="Component" />

        <!-- loading state -->
        <template #fallback>
          <LoadingMessage />
        </template>
      </Suspense>
    </template>
  </RouterView>
</template>
