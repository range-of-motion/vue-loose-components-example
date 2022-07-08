import './bootstrap';

import vue from 'vue/dist/vue.esm.js';
import Vuex from 'vuex';
import { createPinia, PiniaVuePlugin } from 'pinia';

window.Vue = vue;

// VueX
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        counter: 0,
    },

    mutations: {
        increment(state) {
            state.counter ++;
        },
    },
});

// Pinia
Vue.use(PiniaVuePlugin);

const pinia = createPinia();

// Components
import Counter from './components/Counter.vue';
Vue.component('counter', Counter);

import AnotherCounter from './components/AnotherCounter.vue';
Vue.component('another-counter', AnotherCounter);

new Vue({
    el: '#app',
    store,
    pinia,
});
