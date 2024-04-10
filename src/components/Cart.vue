<template>
  <div class="relative">
    <h1>Mon panier</h1>
    <div v-if="!cartStore.isEmpty">
      <router-link to="/catalogue" class="routerCatalogue">Continuer mes achats</router-link>
      <ul class="items-in-cart">
        <CartItem v-for="(items, name) in cartStore.grouped" :key="name" :product="items[0]"
          :count="cartStore.groupCount(name)" @updateCount="cartStore.setItemCount(items[0], $event)"
          @clear="cartStore.clearItem(name)" />

        <div>
          <Shipment />
        </div>
        <div id="total">
          Total: <strong> {{ cartStore.total }} €</strong>
          dont frais de livraison : <strong>{{ cartStore.shippingCost }} €</strong>
        </div>


        <div class="flex-buttons">
          <AppButton class="interactCart" @click="cartStore.$reset()">Effacer le panier</AppButton>
          <AppButton class="interactCart" @click="cartStore.checkout">Valider</AppButton>
        </div>
      </ul>

    </div>


    <div v-else><em>Le panier est vide</em></div>
  </div>


</template>

<script setup>
import CartItem from "./CartItem.vue";
import Shipment from "./Shipment.vue";
import { useCartStore } from "@/stores/cartStore";



defineProps({
  product: { type: Object, required: true },
  count: { type: Number, required: true },
});

defineEmits(["updateCount", "clear"]);


const cartStore = useCartStore();

// Calcul des frais de livraison
// const shippingCost = computed(() => {
//   return shipmentStore.selectedShipment ? shipmentStore.selectedShipment.price : 0;
// });

// Mise à jour du total du panier
// function updateTotal() {
//   cartStore.updateTotal();
// }
const updateTotalWithShipping = () => {
  cartStore.updateTotalWithShipping();
}
</script>

<style>
.headerList {
  display: flex;
  flex-direction: row;
}

.mainContainer {
  max-width: 800px;
  margin: 20px auto;
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

li {
  list-style: none;
  display: flex;
  padding: 20px;
}

.liText {
  margin-block: auto;
}

li img {
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
}

#deleteButton {
  color: #991111;
  cursor: pointer;
  font-size: large;
  width: 50px;
}

.liText input {
  height: fit-content;
  border-style: none;
  border-radius: 20px;
  width: 50px;
}

.cartItem {
  font-size: large;
}

#total {
  margin: 30px 0px 0px 250px;
  font-size: x-large;
  font-weight: bold;
  color: #ff4076;
}

.interactCart {
  background-color: white;
  margin: 15px;
  padding: 10px;
  font-size: large;
  border-radius: 10px;
  border: 1px solid #ff4076;
  color: #ff4076;
  transition: color .20s ease-in-out, background-color .20s ease-in-out, border-color .20s ease-in-out, box-shadow .20s ease-in-out;
}

.interactCart:hover {
  background-color: #ff4076;
  color: white;
}

.flex-buttons {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

a {
  text-decoration: none;
  font-family: fantasy;
  color: #10053e;
  margin: 20px;
}
</style>
