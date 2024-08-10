<script setup>
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['submit'])

const defaultVideoManifestUri =
  'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'

const videoManifestUri = ref(defaultVideoManifestUri)
</script>

<template>
  <div id="container">
    <label for="videoManifestUriInput">Video manifest:</label>
    <input
      id="videoManifestUriInput"
      v-model="videoManifestUri"
      placeholder="Enter the video manifest url"
    />
    <button id="submitButton" @click="emit('submit', videoManifestUri)">Submit</button>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  border: 1px solid;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
}

#videoManifestUriInput {
  width: 440px;
}
</style>
