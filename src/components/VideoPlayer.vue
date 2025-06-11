<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

import shakaPlayerUi from 'shaka-player/dist/shaka-player.ui.js'
import 'shaka-player/dist/controls.css'

const props = defineProps({
  manifestPath: { type: String, required: true },
  thumbnailPath: { type: String, required: true }
})

const emit = defineEmits(['statusChange'])

const videoContainerElement = ref(null)
const videoElement = ref(null)

let uiOverlay = null
let player = new shakaPlayerUi.Player()

const emitStatusChangeEvent = (status) => {
  emit('statusChange', status)
}

const initShakaPlayerUi = async () => {
  emitStatusChangeEvent('Initializing the Shaka Player UI. Please wait...')

  try {
    uiOverlay = new shakaPlayerUi.ui.Overlay(
      player,
      videoContainerElement.value,
      videoElement.value
    )

    const config = {
      enableFullscreenOnRotation: false,
      forceLandscapeOnFullscreen: false
    }
    uiOverlay.configure(config)

    await player.attach(videoElement.value)

    emitStatusChangeEvent('Shaka Player UI has been initialized.')
  } catch (error) {
    emitStatusChangeEvent('An error occurred while initializing the Shaka Player UI.')
    throw error
  }
}

const loadVideo = async () => {
  emitStatusChangeEvent(`Loading video ${props.manifestPath} . Please wait...`)

  try {
    await player.load(props.manifestPath)

    emitStatusChangeEvent('')
  } catch (error) {
    emitStatusChangeEvent(`An error occurred while loading video ${props.manifestPath} : ${error}`)
    throw error
  }
}

onMounted(async () => {
  await initShakaPlayerUi()
  await loadVideo()
})

onUnmounted(async () => {
  if (uiOverlay) {
    await uiOverlay.destroy()
  }

  if (player) {
    await player.destroy()
  }

  uiOverlay = undefined
  player = undefined
})
</script>

<template>
  <div ref="videoContainerElement">
    <video ref="videoElement" :poster="props.thumbnailPath" class="w-full" playsinline></video>
  </div>
</template>
