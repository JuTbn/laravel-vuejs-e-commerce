import './bootstrap';

import Alpine from 'alpinejs';
import { create } from 'lodash';
import {createApp} from 'vue/dist/vue.esm-bundler.js';
import AddToCart from './Components/AddToCart.vue'

window.Alpine = Alpine;

Alpine.start();

const app = createApp();

app
    .component('AddToCart', AddToCart)

app
    .mount('#app')
