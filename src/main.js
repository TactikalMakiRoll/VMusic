import { createApp, watch } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);
const pinia = createPinia();

watch(
  pinia.state,
  (state) => {
    localStorage.setItem('userCode', JSON.stringify(state.userCode));
  },
  { deep: true }
);

app.use(pinia);
app.use(router);

app.mount('#app');
