<template>
  <main>
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <Suspense timeout="0">
          <!-- main content -->
          <component :is="Component" />

          <!-- loading state -->
          <template #fallback>
            <div>Loading...</div>
          </template>
        </Suspense>
      </template>
    </router-view>
  </main>
</template>
