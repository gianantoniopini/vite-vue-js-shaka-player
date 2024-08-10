<script setup>
import { onMounted, ref } from 'vue'

import shakaPlayerUi from 'shaka-player/dist/shaka-player.ui.js'
import 'shaka-player/dist/controls.css'

const posterUri = 'https://shaka-player-demo.appspot.com/assets/poster.jpg'

const videoContainerElement = ref(null)
const videoElement = ref(null)
const message = ref('')

const localPlayer = new shakaPlayerUi.Player()

onMounted(async () => {
  await initShakaPlayerUi()
  await loadVideo('https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd')
})

const initShakaPlayerUi = async () => {
  message.value = 'Initializing the Shaka Player UI. Please wait...'

  try {
    const ui = new shakaPlayerUi.ui.Overlay(
      localPlayer,
      videoContainerElement.value,
      videoElement.value
    )

    await localPlayer.attach(videoElement.value)

    ui.getControls()

    message.value = 'Shaka Player UI has been initialized.'
  } catch (error) {
    message.value = 'An error occurred while initializing the Shaka Player UI.'
    throw error
  }
}

const loadVideo = async (manifestUri) => {
  message.value = `Loading video ${manifestUri} . Please wait...`

  try {
    await localPlayer.load(manifestUri)

    message.value = `Video ${manifestUri} has been loaded.`
  } catch (error) {
    message.value = `An error occurred while loading video ${manifestUri} .`
    throw error
  }
}
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
