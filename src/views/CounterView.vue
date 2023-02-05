<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const counterStore = useCounterStore();
</script>
<template>
  <div id="Counter">
    <div class="supText">The counter is:</div>
    <div class="counter">{{ counterStore.count }}</div>
    <button class="decrement" @click="counterStore.decrement()">
      Decrease
    </button>
    <button class="increment" @click="counterStore.increment()">
      Increase
    </button>
  </div>
</template>

<style lang="scss" scoped>
#Counter {
  margin-top: 5vh;
  text-align: center;

  .supText {
    font-size: 24px;
    opacity: 0.4;
  }

  .counter {
    font-size: 48px;
    font-weight: 600;
  }

  button:not(:first-child) {
    margin-left: 1vw;
  }
}
</style>
