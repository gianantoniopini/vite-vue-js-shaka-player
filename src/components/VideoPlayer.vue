<script setup>
import { onMounted, ref } from 'vue'

import shakaPlayerUi from 'shaka-player/dist/shaka-player.ui.js'
import 'shaka-player/dist/controls.css'

const props = defineProps({
  manifestUrl: { type: String, required: true },
  thumbnailUrl: { type: String, required: true }
})

const emit = defineEmits(['statusChange'])

const videoContainerElement = ref(null)
const videoElement = ref(null)

const localPlayer = new shakaPlayerUi.Player()

const emitStatusChangeEvent = (status) => {
  emit('statusChange', status)
}

const initShakaPlayerUi = async () => {
  emitStatusChangeEvent('Initializing the Shaka Player UI. Please wait...')

  try {
    const ui = new shakaPlayerUi.ui.Overlay(
      localPlayer,
      videoContainerElement.value,
      videoElement.value
    )

    await localPlayer.attach(videoElement.value)

    ui.getControls()

    emitStatusChangeEvent('Shaka Player UI has been initialized.')
  } catch (error) {
    emitStatusChangeEvent('An error occurred while initializing the Shaka Player UI.')
    throw error
  }
}

const loadVideo = async () => {
  emitStatusChangeEvent(`Loading video ${props.manifestUrl} . Please wait...`)

  try {
    await localPlayer.load(props.manifestUrl)

    emitStatusChangeEvent('')
  } catch (error) {
    emitStatusChangeEvent(`An error occurred while loading video ${props.manifestUrl} : ${error}`)
    throw error
  }
}

onMounted(async () => {
  await initShakaPlayerUi()
  await loadVideo()
})
</script>

<template>
  <div ref="videoContainerElement">
    <video ref="videoElement" :poster="props.thumbnailUrl" autoplay="true" class="w-full"></video>
  </div>
</template>
