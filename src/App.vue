<script setup>
import LoadingMessage from '@/components/LoadingMessage.vue'
</script>

<template>
  <main>
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <Suspense timeout="0">
          <!-- main content -->
          <component :is="Component" />

          <!-- loading state -->
          <template #fallback>
            <LoadingMessage class="h-screen" />
          </template>
        </Suspense>
      </template>
    </router-view>
  </main>
</template>
