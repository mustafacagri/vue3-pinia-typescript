<script setup lang="ts">
import { useProductStore } from "@/stores/product";
const productStore = useProductStore();

const columns = [
  "id",
  "title",
  "price",
  "discount",
  "rating",
  "brand",
  "category",
  "thumbnail",
];
</script>

<template>
  <div id="Products">
    <div v-if="productStore.error" class="error">{{ productStore.error }}</div>
    <table v-else>
      <thead>
        <tr v-if="productStore.products.length > 0">
          <td v-for="column in columns" :key="column">
            {{ column }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productStore.products" :key="product.id">
          <td v-for="column in columns" :key="column">{{ product[column] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
table {
  thead {
    background-color: #ddd;

    tr {
      td {
        font-weight: bold;
      }
    }
  }

  tr {
    td {
      padding: 5px 10px;
    }
  }

  tr:nth-child(even) {
    background-color: #f0f0f0;
  }
}
</style>
