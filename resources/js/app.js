import './bootstrap';

import vue from 'vue/dist/vue.esm.js';
import Vuex from 'vuex';

window.Vue = vue;

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

import Counter from './components/Counter.vue';
Vue.component('counter', Counter);

new Vue({
    el: '#app',
    store: store,
});
