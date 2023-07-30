<template>
    <div class="fixed bottom-5 flex w-full justify-center">
        <div class="flex w-fit gap-2 bg-slate-900 bg-opacity-50 backdrop-blur-sm p-3 px-5 rounded-full">

            <a href="https://mail.google.com/mail/u/0/" class="p-3 rounded-xl hover:bg-white hover:bg-opacity-5"><img class="w-8" src="../assets/logos/gmail.svg"></a>
            <a href="https://web.whatsapp.com/" class="p-3 rounded-xl hover:bg-white hover:bg-opacity-5"><img class="w-8" src="../assets/logos/whatsapp.svg"></a>
            <a href="https://chat.openai.com/" class="p-3 rounded-xl hover:bg-white hover:bg-opacity-5"><img class="w-8" src="../assets/logos/openai.svg"></a>
            <a href="https://github.com/whoismidlaj/" class="p-3 rounded-xl hover:bg-white hover:bg-opacity-5"><img class="w-8" src="../assets/logos/github.svg"></a>
            <button @click="toggleMenu" class="p-3 rounded-xl hover:bg-white hover:bg-opacity-5"><img class="w-8" src="../assets/logos/menu.svg"></button>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';

const toggleMenu = () => {
  const menu = document.getElementById('menu'); // Replace 'menu' with the ID of your MenuComponent element

  if (menu) {
    // Check if the element has the 'hidden' class
    const hasHiddenClass = menu.classList.contains('hidden');

    // Toggle the 'hidden' class accordingly
    if (hasHiddenClass) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  }
};

</script>