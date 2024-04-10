import { defineStore } from "pinia";

export const useShipmentStore = defineStore("ShipmentStore", {
  state: () => {
    return {
      shipments: [],

    };
  },
  actions: {
    async fill() {
      this.shipments = (await import("@/data/shipments.json")).default;
    },
  }
    },  
  );


