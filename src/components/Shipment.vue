<template>
  <div class="mainContainer">
    <h3>Choisissez votre mode de livraison :</h3>
    <input type="radio" id="livraisonDomicile" name="livraison" value="2" v-model="selectedShippingCost" @change="updateShippingCost">
    <label for="livraisonDomicile">Livraison à domicile (2 €)</label><br>
    <input type="radio" id="livraisonPointRelais" name="livraison" value="1" v-model="selectedShippingCost" @change="updateShippingCost">
    <label for="livraisonPointRelais">Livraison en point relais (1 €)</label><br>
    <div v-if="selectedShippingCost !== null">
      Prix sélectionné : {{ selectedShippingCost }} €
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import { useShipmentStore } from '../stores/shipmentStore';
import { useCartStore } from '../stores/cartStore';

// const shipmentStore = useShipmentStore();
const cartStore = useCartStore();
const selectedShippingCost = ref(null);

const updateShippingCost = () => {
  cartStore.shippingCost = selectedShippingCost.value ? parseInt(selectedShippingCost.value) : 0;
  cartStore.updateTotalWithShipping();
}
// shipmentStore.fill();


</script>
