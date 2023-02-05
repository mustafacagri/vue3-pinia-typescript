import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 0 };
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) this.count--; // a control to not make it a negative number
    },
  },
});
