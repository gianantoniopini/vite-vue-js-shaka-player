<script setup>
import { getAllVideos } from '@/services/videos'
import VideoListItem from '@/components/VideoListItem.vue'

const videos = await getAllVideos()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <VideoListItem
      v-for="video in videos"
      :id="video.id"
      :key="video.id"
      :duration="video.duration"
      :thumbnail-path="video.thumbnailPath"
      :title="video.title"
    />
  </div>
</template>
