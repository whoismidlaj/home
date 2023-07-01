<script setup>
import { RouterLink, RouterView } from 'vue-router';
import TopBar from './components/TopBar.vue';
import Dock from './components/Dock.vue';
</script>

<template>
  <TopBar />
  <RouterView />
  <Dock />
</template>

<style scoped>
</style>
