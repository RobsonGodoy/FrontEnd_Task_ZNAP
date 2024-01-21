import { createApp } from 'vue';
import App from './App.vue';
import { registerPlugins } from '@/plugins';
import router from './router'; // Importa o router

const app = createApp(App);

// Registra plugins
registerPlugins(app);

// Usa o Vue Router
app.use(router);

// Monta o aplicativo no elemento com id 'app'
app.mount('#app');
