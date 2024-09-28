<template>
  <main>
    <router-view v-slot="{ Component }">
      <Suspense timeout="0">
        <template #default>
          <component :is="Component" />
        </template>

        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </router-view>
  </main>
</template>
