<script setup>
import { useRoute } from 'vue-router'
import { getVideoById } from '@/services/videos'
import VideoPlayer from '@/components/VideoPlayer.vue'

const route = useRoute()

const video = await getVideoById(route.params.id)
</script>

<template>
  <video-player
    v-if="video"
    :license="video.license"
    :manifest-url="video.manifestUrl"
    :thumbnail-url="video.thumbnailUrl"
    :title="video.title"
  />
  <div v-else class="w-full"><p>Video unavailable</p></div>
</template>
