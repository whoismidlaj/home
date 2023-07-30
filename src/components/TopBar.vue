<template>
    <header class="fixed top-0 z-50 w-full flex justify-between bg-slate-900 bg-opacity-40 backdrop-blur-sm p-3 py-2">

        <div class="text-slate-200 text-sm">midlaj's homepage</div>
        <div class="text-slate-200 text-sm">You're Awesome :)</div>
        <div class="text-slate-200 text-sm">{{ currentTime }}</div>

    </header>
</template>

<script setup>

import { ref, onMounted } from 'vue';

const currentTime = ref('');

const updateTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  currentTime.value = `${formattedHours}:${formattedMinutes} ${ampm}`;
};

onMounted(() => {
  updateTime();
  setInterval(updateTime, 1000);
});

</script>