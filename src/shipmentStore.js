import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useShipmentStore = defineStore(
  'shipmentStore', () => {
    const shipments = ref([
      {
        id: 1,
        name: "À domicile",
        price: 1,
        selected: false
      },
      {
        id: 2,
        name: "En point relais",
        price: 2,
        selected: false
      }
    ]);

    function addShipmentOption(id) {
      const deliveryOption = shipments.selected;
      console.log(deliveryOption);
      const shipment = shipments.value.find(shipment => shipment.id === id)
      console.log('kikou', deliveryOption);
      }

    return {
      shipments,
      addShipmentOption
    }
});


