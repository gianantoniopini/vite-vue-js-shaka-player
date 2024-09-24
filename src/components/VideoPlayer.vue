<script setup>
import { onMounted, ref } from 'vue'

import shakaPlayerUi from 'shaka-player/dist/shaka-player.ui.js'
import 'shaka-player/dist/controls.css'

const props = defineProps({
  thumbnailUrl: { type: String, required: true }
})

const videoContainerElement = ref(null)
const videoElement = ref(null)
const manifestUri =
  'https://upload.wikimedia.org/wikipedia/commons/1/1d/Video_of_Mahatma_Gandhi.webm'
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

const loadVideo = async (manifestUri) => {
  message.value = `Loading video ${manifestUri} . Please wait...`

  try {
    await localPlayer.load(manifestUri)

    message.value = ''
  } catch (error) {
    message.value = `An error occurred while loading video ${manifestUri} : ${error}`
    throw error
  }
}

onMounted(async () => {
  await initShakaPlayerUi()
  await loadVideo(manifestUri)
})
</script>

<template>
  <div class="flex flex-col gap-3 max-w-[640px] max-h-[480px]">
    <div ref="videoContainerElement" class="shadow">
      <video
        ref="videoElement"
        :poster="props.thumbnailUrl"
        autoplay="true"
        class="w-full h-full"
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
