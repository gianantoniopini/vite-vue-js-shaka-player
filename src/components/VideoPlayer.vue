<script setup>
import { onMounted, ref } from 'vue'

import shakaPlayerUi from 'shaka-player/dist/shaka-player.ui.js'
import 'shaka-player/dist/controls.css'

const manifestUri = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'
const posterUri = 'https://shaka-player-demo.appspot.com/assets/poster.jpg'

const videoContainerElement = ref(null)
const videoElement = ref(null)
const message = ref('')

onMounted(async () => {
  message.value = 'Loading Video. Please wait...'

  try {
    const localPlayer = new shakaPlayerUi.Player()
    const ui = new shakaPlayerUi.ui.Overlay(
      localPlayer,
      videoContainerElement.value,
      videoElement.value
    )
    await localPlayer.attach(videoElement.value)

    ui.getControls()

    await localPlayer.load(manifestUri)
    message.value = 'Video loaded!'
  } catch (error) {
    console.error('Error', error)
    message.value = 'An error occurred. Please check the browser console for more details.'
  }
})
</script>

<template>
  <div ref="videoContainerElement" style="max-width: 40em">
    <video
      id="video"
      ref="videoElement"
      :poster="posterUri"
      style="width: 100%; height: 100%"
    ></video>
  </div>
  <div>{{ message }}</div>
</template>
