<template>
  <NuxtLayout >
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
useHead({
  // titleTemplate: '%s - Site Title',
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : 'Site Title';
  }
});
</script>