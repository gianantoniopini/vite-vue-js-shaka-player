<script setup>
const props = defineProps({
  author: { type: String, required: true },
  hostingWebsiteName: { type: String, required: true },
  license: { type: String, required: true },
  sourceUrl: { type: String, required: true },
  title: { type: String, required: true }
})
</script>

<template>
  <p class="text-lg">
    "<a :href="props.sourceUrl" target="_blank" rel="noreferrer"
      >{{ props.title }}
      <img src="@/assets/externalLink.svg" alt="External link" class="inline" /></a
    >" by {{ props.author }}, {{ props.license }}, via {{ props.hostingWebsiteName }}
  </p>
</template>
