<script setup>
import videos from '../assets/videos.json'
import VideoListItem from '@/components/VideoListItem.vue'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <div v-for="video in videos" :key="video.id" class="flex flex-col max-w-sm rounded shadow-lg">
      <video-list-item
        :duration="video.duration"
        :id="video.id"
        :thumbnail-url="video.thumbnailUrl"
        :title="video.title"
      />
    </div>
  </div>
</template>
