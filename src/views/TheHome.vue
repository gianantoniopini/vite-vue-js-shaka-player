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
  <video-player-input @submit="onVideoPlayerInputSubmit" />
  <video-player :manifest-uri="manifestUri" />
</template>
