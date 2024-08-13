<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit'])

const defaultVideoManifestUri =
  'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'

const videoManifestUri = ref(defaultVideoManifestUri)

const onSubmit = () => {
  if (!validateVideoManifestUri()) {
    return
  }

  emit('submit', videoManifestUri.value)
}

const validateVideoManifestUri = () => {
  return videoManifestUri.value && videoManifestUri.value.length > 0
}
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex flex-col gap-1 items-start">
      <label for="videoManifestUriInput" class="whitespace-nowrap">Video manifest:</label>
      <input
        id="videoManifestUriInput"
        class="w-full"
        v-model.trim="videoManifestUri"
        placeholder="Enter the video manifest url"
        @keydown.enter="onSubmit"
      />
    </div>
    <button type="button" @click="onSubmit" class="whitespace-nowrap w-fit self-center">
      Load video
    </button>
  </div>
</template>
