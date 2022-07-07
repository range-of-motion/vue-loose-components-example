<script setup>
import { ref } from 'vue';

const counter = ref(0);

function increment() {
  counter.value ++;
}
</script>

<template>
    <div>
        <h1>{{ counter }}</h1>
        <button @click="increment">Increment</button>
    </div>
</template>
