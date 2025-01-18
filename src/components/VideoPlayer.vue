<script setup>
import { onMounted, ref } from 'vue'

import shaka from 'shaka-player'

const props = defineProps({
  manifestUrl: { type: String, required: true },
  thumbnailUrl: { type: String, required: true }
})

const emit = defineEmits(['statusChange'])

const videoElement = ref(null)

const emitStatusChangeEvent = (status) => {
  emit('statusChange', status)
}

const init = async () => {
  emitStatusChangeEvent('Initializing. Please wait...')

  try {
    // Install built-in polyfills to patch browser incompatibilities
    shaka.polyfill.installAll()

    const localPlayer = new shaka.Player()

    await localPlayer.attach(videoElement.value)

    await localPlayer.load(props.manifestUrl)

    emitStatusChangeEvent('')
  } catch (error) {
    emitStatusChangeEvent(`An error occurred during initialization: ${error}`)
    throw error
  }
}

onMounted(async () => {
  await init()
})
</script>

<template>
  <video
    ref="videoElement"
    :poster="props.thumbnailUrl"
    autoplay="true"
    controls="true"
    class="w-full"
  ></video>
</template>
