<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getVideoById } from '@/services/videos'
import VideoPlayer from '@/components/VideoPlayer.vue'
import VideoAttribution from '@/components/VideoAttribution.vue'

const route = useRoute()

const videoPlayerStatus = ref('')

const onVideoPlayerStatusChange = (value) => {
  videoPlayerStatus.value = value
}

const video = await getVideoById(route.params.id)
</script>

<template>
  <div v-if="video" class="flex flex-col gap-5 max-w-xl text-start ow-anywhere">
    <video-player
      :manifest-path="video.manifestPath"
      :thumbnail-path="video.thumbnailPath"
      @status-change="onVideoPlayerStatusChange"
    />
    <h1 class="text-2xl font-bold">{{ video.title }}</h1>
    <video-attribution
      :author="video.author"
      :hosting-website-name="video.hostingWebsiteName"
      :license="video.license"
      :source-url="video.sourceUrl"
      :title="video.title"
    />
    <span class="text-base">{{ videoPlayerStatus }}</span>
  </div>
  <div v-else class="w-full"><p>Video unavailable</p></div>
</template>

<style scoped>
.ow-anywhere {
  overflow-wrap: anywhere;
}
</style>
