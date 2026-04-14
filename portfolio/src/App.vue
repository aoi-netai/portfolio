<script setup lang="ts">
import TopBanner from './components/TopBanner.vue'
import BottomLink from './components/BottomLink.vue'
</script>

<template>
  <TopBanner />
  <RouterView />
  <BottomLink />
</template>
