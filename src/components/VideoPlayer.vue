<script setup>
import { onMounted, ref } from 'vue'

import shakaPlayerUi from 'shaka-player/dist/shaka-player.ui.js'
import 'shaka-player/dist/controls.css'

const props = defineProps({
  manifestUrl: { type: String, required: true },
  thumbnailUrl: { type: String, required: true }
})

const videoContainerElement = ref(null)
const videoElement = ref(null)
const message = ref('')

const localPlayer = new shakaPlayerUi.Player()

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

const loadVideo = async () => {
  message.value = `Loading video ${props.manifestUrl} . Please wait...`

  try {
    await localPlayer.load(props.manifestUrl)

    message.value = ''
  } catch (error) {
    message.value = `An error occurred while loading video ${props.manifestUrl} : ${error}`
    throw error
  }
}

onMounted(async () => {
  await initShakaPlayerUi()
  await loadVideo()
})
</script>

<template>
  <div class="flex flex-col gap-3 max-w-[640px]">
    <div ref="videoContainerElement" class="shadow">
      <video
        ref="videoElement"
        :poster="props.thumbnailUrl"
        autoplay="true"
        class="w-[640px]"
      ></video>
    </div>
    <span class="text-start overflow-wrap">{{ message }}</span>
  </div>
</template>

<style scoped>
.shadow {
  box-shadow:
    0px 1px 2px rgba(0, 0, 0, 0.1),
    0px 2px 4px rgba(0, 0, 0, 0.1),
    0px 4px 8px rgba(0, 0, 0, 0.1),
    0px 8px 16px rgba(0, 0, 0, 0.1);
}

.overflow-wrap {
  overflow-wrap: anywhere;
}
</style>
