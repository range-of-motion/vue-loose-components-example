import './bootstrap';

import vue from 'vue/dist/vue.esm.js';
window.Vue = vue;

import Counter from './components/Counter.vue';
Vue.component('counter', Counter);

new Vue({
    el: '#app',
});
