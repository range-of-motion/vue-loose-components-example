import { defineStore } from 'pinia';

export const useDefaultStore = defineStore('default', {
    state: () => {
        return {
            counter: 1,
        };
    },

    actions: {
        increment() {
            this.counter ++;
        }
    },

    getters: {
        //
    }
});
