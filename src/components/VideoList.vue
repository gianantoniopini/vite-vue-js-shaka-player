<script setup>
import { getAllVideos } from '@/services/videos'
import VideoListItem from '@/components/VideoListItem.vue'

const videos = await getAllVideos()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <video-list-item
      v-for="video in videos"
      :key="video.id"
      :duration="video.duration"
      :id="video.id"
      :thumbnail-url="video.thumbnailUrl"
      :title="video.title"
    />
  </div>
</template>
