<template>
  <div class="mainContainer">
    <h3>Je choisis le mode de livraison :</h3>
    <input type="radio" id="livraisonDomicile" name="livraison" value="2" v-model="selectedShippingCost"
      @change="updateShippingCost">
    <label for="livraisonDomicile">Livraison à domicile (2 €)</label><br>
    <input type="radio" id="livraisonPointRelais" name="livraison" value="1" v-model="selectedShippingCost"
      @change="updateShippingCost">
    <label for="livraisonPointRelais">Livraison en point relais (1 €)</label><br>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '../stores/cartStore';

const cartStore = useCartStore();
const selectedShippingCost = ref(null);

const updateShippingCost = () => {
  cartStore.shippingCost = selectedShippingCost.value ? parseInt(selectedShippingCost.value) : 0;
  cartStore.updateTotalWithShipping();
}

</script>

<style>
.mainContainer {
  font-family: 'Pt Sans';
}
</style>