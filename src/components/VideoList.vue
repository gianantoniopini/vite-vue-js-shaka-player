<script setup>
import videos from '../assets/videos.json'

const toHHMMSS = (seconds) => {
  return new Date(seconds * 1000).toISOString().slice(11, 19)
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <div v-for="video in videos" :key="video.id" class="flex flex-col max-w-sm rounded shadow-lg">
      <img class="w-full" :src="video.thumbnailUrl" />
      <div class="flex flex-grow flex-col gap-2 p-2 text-left justify-between">
        <div class="font-bold text-xl">{{ video.title }}</div>
        <p class="text-gray-700 text-base">{{ toHHMMSS(video.duration) }}</p>
      </div>
    </div>
  </div>
</template>
