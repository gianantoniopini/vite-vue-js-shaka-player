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
  <div v-if="video" class="flex flex-col gap-5 max-w-xl text-start ow-anywhere">
    <video-player
      :manifest-path="video.manifestPath"
      :thumbnail-path="video.thumbnailPath"
      @status-change="onVideoPlayerStatusChange"
    />
    <h1 class="text-2xl font-bold">{{ video.title }}</h1>
    <p class="text-lg">
      "<a :href="video.detailsUrl" target="_blank" rel="noreferrer"
        >{{ video.title }}
        <img src="@/assets/externalLink.svg" alt="External link" class="inline" /></a
      >" by {{ video.author }}, {{ video.license }}, via {{ video.hostingWebsiteName }}
    </p>
    <span class="text-base">{{ videoPlayerStatus }}</span>
  </div>
  <div v-else class="w-full"><p>Video unavailable</p></div>
</template>

<style scoped>
.ow-anywhere {
  overflow-wrap: anywhere;
}
</style>
