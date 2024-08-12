<script setup>
import { defineProps, onMounted, ref, watch } from 'vue'

import shakaPlayerUi from 'shaka-player/dist/shaka-player.ui.js'
import 'shaka-player/dist/controls.css'

const props = defineProps({
  manifestUri: String
})

const posterUri = 'https://shaka-player-demo.appspot.com/assets/poster.jpg'

const videoContainerElement = ref(null)
const videoElement = ref(null)
const message = ref('')

const localPlayer = new shakaPlayerUi.Player()

onMounted(async () => {
  await initShakaPlayerUi()
})

watch(
  () => props.manifestUri,
  (newValue) => {
    loadVideo(newValue)
  }
)

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
  <div class="flex flex-col gap-3 max-w-[600px]">
    <div ref="videoContainerElement">
      <video id="video" ref="videoElement" :poster="posterUri" class="w-full h-full"></video>
    </div>
    <div class="text-start">{{ message }}</div>
  </div>
</template>
