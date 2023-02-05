<script setup lang="ts">
import { computed } from "vue";
import { useCounterStore } from "@/stores/counter";
import { useProductStore } from "@/stores/product";
const counterStore = useCounterStore();
const productStore = useProductStore();

const productLength = computed<number>(
  () => productStore?.products.length || 0
);

const list: { text: string; value: any }[] = [
  // : { text: string; value: any }[]  this part to define the types, in Javascript we did not need this defining
  { text: "Counter", value: counterStore.count },
  { text: "Product Count", value: productLength },
];
</script>

<template>
  <div id="Home">
    <div class="row" v-for="element in list" :key="element.text">
      <div>{{ element.text }}</div>
      <div>{{ element.value }}</div>
    </div>

    <div v-if="productStore.error" class="text-center">
      Product Fetch Error :
      <label class="error">{{ productStore.error }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#Home {
  margin-top: 0vw;

  .divider {
    margin: 0 auto;
    width: 100%;
    border-top: 2px dashed #ddd;
    margin-bottom: 2vw;
  }
  .error {
    color: red !important;
  }
  .row {
    display: flex;

    & > div {
      flex-grow: 1;
    }

    & > div:nth-child(even) {
      font-weight: bold;
      text-align: left;
      padding-left: 5px;
    }
    & > div:nth-child(odd) {
      text-align: right;
      padding-right: 5px;

      &:after {
        content: ":";
      }
    }
  }
}
</style>
