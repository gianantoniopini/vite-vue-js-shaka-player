<script setup>
const props = defineProps({
  duration: { type: Number, required: true },
  id: { type: String, required: true },
  thumbnailPath: { type: String, required: true },
  title: { type: String, required: true }
})

const toHHMMSS = (seconds) => {
  return new Date(seconds * 1000).toISOString().slice(11, 19)
}
</script>

<template>
  <RouterLink
    :to="{ name: 'WatchVideo', params: { id: props.id } }"
    class="flex flex-col p-4 border border-gray-400 bg-white rounded shadow-lg"
  >
    <img :src="props.thumbnailPath" :alt="props.title" />
    <div class="flex flex-grow flex-col gap-2 p-2 text-left justify-between">
      <div class="text-gray-900 font-bold text-xl">{{ props.title }}</div>
      <p class="text-gray-700 text-base">{{ toHHMMSS(props.duration) }}</p>
    </div>
  </RouterLink>
</template>
