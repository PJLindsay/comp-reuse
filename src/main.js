import { createApp } from 'vue';

import App from './App.vue';
import loggerMixin from './mixins/logger.js'

const app = createApp(App)

// register GLOBAL mixins
app.mixin(loggerMixin)

app.mount('#app');
