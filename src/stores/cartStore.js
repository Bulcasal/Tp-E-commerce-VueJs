import { defineStore } from "pinia";
import { groupBy } from "lodash";
import { useShipmentStore } from "./shipmentStore";

export const useCartStore = defineStore("cartStore", {
  state: () => {
    return {
      items: [],
      shippingCost: 0,
    };
  },
  actions: {
    addItems(count, item) {
      count = parseInt(count);
      for (let i = 0; i < count; i++) {
        this.items.push({ ...item });
      }
    },
    clearItem(itemName) {
      this.items = this.items.filter((item) => item.name !== itemName);
    },
    setItemCount(item, count) {
      this.clearItem(item.name);
      this.addItems(count, item);
    },
    // updateTotal() {
    //   let total = this.items.reduce((acc, item) => acc + item.unit_price, 0);
    //   this.total = total;
    // },
    //test
    updateTotalWithShipping() {
      let total = this.items.reduce((acc, item) => acc + item.unit_price, 0) + shippingCost;
      this.total = total;
    },

  },

  getters: {
    count: (state) => state.items.length,

    isEmpty: (state) => state.count === 0,
    // isEmpty() {
    //   return this.count === 0;
    // },
    grouped: (state) => {
      const grouped = groupBy(state.items, (item) => item.name);
      const sorted = Object.keys(grouped).sort();
      let inOrder = {};
      sorted.forEach((key) => (inOrder[key] = grouped[key]));
      return inOrder;
    },
    groupCount: (state) => (name) => state.grouped[name].length,

    // total: (state) => state.items.reduce((p, c) => p + c.unit_price, 0),
    

    //test
    total(state) {
      const itemsTotal = state.items.reduce((acc, item) => acc + item.unit_price, 0);
      return itemsTotal + state.shippingCost;
    },
    //test
  },
});
