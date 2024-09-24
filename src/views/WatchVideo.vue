<script setup>
import videos from '../assets/videos.json'
import VideoPlayer from '@/components/VideoPlayer.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const video = videos.find((el) => {
  return el.id === route.params.id
})
</script>

<template>
  <video-player :thumbnail-url="video.thumbnailUrl" />
</template>
