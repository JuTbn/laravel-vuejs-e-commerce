import './bootstrap';

import Alpine from 'alpinejs';
import { create } from 'lodash';

window.Alpine = Alpine;

Alpine.start();

const app = createApp();
app.mount('#app');