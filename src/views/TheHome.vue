<script setup>
import { ref } from 'vue'
import VideoPlayerInput from '@/components/VideoPlayerInput.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'

const manifestUri = ref('')

const onVideoPlayerInputSubmit = (value) => {
  manifestUri.value = value
}
</script>

<template>
  <div class="flex flex-col gap-5 w-full h-full">
    <video-player-input @submit="onVideoPlayerInputSubmit" />
    <hr />
    <video-player :manifest-uri="manifestUri" />
  </div>
</template>
