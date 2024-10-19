<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getVideoById } from '@/services/videos'
import VideoPlayer from '@/components/VideoPlayer.vue'

const route = useRoute()

const videoPlayerStatus = ref('')

const onVideoPlayerStatusChange = (value) => {
  videoPlayerStatus.value = value
}

const video = await getVideoById(route.params.id)
</script>

<template>
  <div v-if="video" class="flex flex-col gap-5 max-w-xl">
    <video-player
      :manifest-url="video.manifestUrl"
      :thumbnail-url="video.thumbnailUrl"
      @status-change="onVideoPlayerStatusChange"
    />
    <h1 class="text-start text-2xl font-bold">{{ video.title }}</h1>
    <span class="text-start text-lg overflow-wrap">License: {{ video.license }}</span>
    <span class="text-start text-base overflow-wrap">{{ videoPlayerStatus }}</span>
  </div>
  <div v-else class="w-full"><p>Video unavailable</p></div>
</template>

<style scoped>
.overflow-wrap {
  overflow-wrap: anywhere;
}
</style>
