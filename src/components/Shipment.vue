<template>
  <div class="mainContainer">
    <h3>Je choisis le mode de livraison</h3>
    <ul>
      <li v-for="shipment in store.shipments" :key="shipment.id">
        {{ shipment.name }}{{ shipment.price }} €
        <input type="checkbox" v-model="shipment.selected" @change="store.addShipmentOption">
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useShipmentStore } from '@/shipmentStore';

const store = useShipmentStore();
</script>