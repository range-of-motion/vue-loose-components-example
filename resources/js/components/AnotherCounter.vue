<template>
    <div>
        <h1>{{ counter }}</h1>
        <button @click="increment">Increment</button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import { useDefaultStore } from '../stores/DefaultStore.js';

export default {
    computed: {
        ...mapState(useDefaultStore, ['counter']),
    },

    methods: {
        ...mapActions(useDefaultStore, ['increment']),
    }
};
</script>
