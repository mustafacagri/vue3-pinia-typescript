import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => {
    return {
      products: [],
      error: <any>null, // this might be null or string
      productsURL: <string>"https://dummyjson.com/products?limit=10",
    };
  },
  actions: {
    init() {
      console.info("product store has been initialized!");

      fetch(this.productsURL)
        .then((res) => res.json())
        .then((json) => {
          if (json && Array.isArray(json?.products)) {
            this.products = json.products;
          }
        })
        .catch((err) => (this.error = err)); // populate the error field in the store to show that there is an issue has been happened while fetching the data
    },
  },
});
