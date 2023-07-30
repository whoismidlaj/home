<script setup>
import { RouterLink, RouterView } from 'vue-router';
import TopBar from './components/TopBar.vue';
import Dock from './components/Dock.vue';
import Menu from './components/Menu.vue';
</script>

<template>
  <div class="bg-[url('/src/assets/img/ign-waifu.png')] bg-cover">
    <TopBar />
    <RouterView />
    <Menu />
    <Dock />
  </div>
</template>