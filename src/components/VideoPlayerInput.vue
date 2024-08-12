<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit'])

const defaultVideoManifestUri =
  'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'

const videoManifestUri = ref(defaultVideoManifestUri)
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
    <label for="videoManifestUriInput" class="whitespace-nowrap">Video manifest:</label>
    <input
      id="videoManifestUriInput"
      class="w-full"
      v-model="videoManifestUri"
      placeholder="Enter the video manifest url"
    />
    <button @click="emit('submit', videoManifestUri)" class="whitespace-nowrap">Load video</button>
  </div>
</template>
