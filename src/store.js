import {ref, computed} from 'vue'
import AboutVue from './apps/About.vue'

export function store() {
    const openedApps = ref([]);

    const apps = computed(() => [
      {
        id: 'About',
        component: AboutVue,
        icon: '../src/assets/logos/whatsapp.svg',
      },
    ]);
  
    // Return the stores and computed property
    return {
      openedApps,
      apps,
    };
  }