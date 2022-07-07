import { createApp } from 'vue/dist/vue.esm-bundler.js'

const app = createApp({})

import Counter from './components/Counter.vue'
app.component('counter', Counter)

app.mount('#app')
