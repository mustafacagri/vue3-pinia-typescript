import { defineStore } from "pinia";
import { useProductStore } from "./product";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      routes: [
        { to: "/", text: "Home" },
        { to: "/counter", text: "Counter" },
        { to: "/product", text: "Product" },
      ],
    };
  },
  actions: {
    init() {
      useProductStore().init();
    },
  },
});
