<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getVideoById } from '@/services/videos'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
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
  <DefaultLayout>
    <div class="grid place-items-center">
      <div v-if="video" class="flex flex-col gap-5 max-w-xl text-start ow-anywhere">
        <VideoPlayer
          :manifest-path="video.manifestPath"
          :thumbnail-path="video.thumbnailPath"
          @status-change="onVideoPlayerStatusChange"
        />
        <h1 class="text-2xl font-bold">{{ video.title }}</h1>
        <VideoAttribution
          :author="video.author"
          :hosting-website-name="video.hostingWebsiteName"
          :license="video.license"
          :source-url="video.sourceUrl"
          :title="video.title"
        />
        <span class="text-base">{{ videoPlayerStatus }}</span>
      </div>
      <div v-else><p>Video unavailable</p></div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.ow-anywhere {
  overflow-wrap: anywhere;
}
</style>
