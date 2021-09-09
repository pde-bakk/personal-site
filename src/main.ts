import { createApp } from 'vue';
import Particles from 'particles.vue3';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import './assets/main.css';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Particles);
app.mount('#app');
