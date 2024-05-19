<template>
  <div class="relative">
    <h1>Mon panier</h1>
    <div v-if="!cartStore.isEmpty">
      <router-link to="/catalogue" class="routerCatalogue"><i class="fa-solid fa-arrow-left"></i><em> Continuer mes
          achats</em></router-link>
      <ul class="items-in-cart">
        <CartItem v-for="(items, name) in cartStore.grouped" :key="name" :product="items[0]"
          :count="cartStore.groupCount(name)" @updateCount="cartStore.setItemCount(items[0], $event)"
          @clear="cartStore.clearItem(name)" />

        <div class="total-container">
          <div id="shipment-container">
            <Shipment />
          </div>
          <div id="total">
            <strong> Total: {{ cartStore.total }}€</strong>
            <em> (dont frais de livraison : {{ cartStore.shippingCost }}€)</em>
          </div>
        </div>
        <div class="flex-buttons">
          <AppButton class="interactCart" @click="cartStore.$reset()">Vider le panier</AppButton>
          <AppButton class="interactCart" @click="cartStore.checkout">Valider</AppButton>
        </div>
      </ul>
    </div>
    <div v-else><em>
        <p>est vide <i class="fa-solid fa-face-sad-cry"></i></p>
      </em>
      <router-link to="/catalogue">
        <p id="buy-now">Remplir mon panier !</p>
      </router-link>
    </div>
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

const updateTotalWithShipping = () => {
  cartStore.updateTotalWithShipping();
}
</script>

<style>
h1 {
  margin: 50px 0;
  text-align: center;
}

.routerCatalogue {
  margin: 30px 0 50px 30px;
  color: #ff4076;
}

.headerList {
  display: flex;
  flex-direction: row;
}

.mainContainer {
  max-width: 800px;
  margin: 20px auto;
}

#shipment-container {
  margin-right: 200px;
}

.total-container {
  display: flex;
  justify-content: center;
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
  /* border-bottom: 1px solid #ccc; */
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
  font-size: 1.2rem;
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
  font-family: 'Pt Sans';
  text-align: center;
  margin-top: 30px;
  margin-right: 20px;
  padding-top: 20px;
  font-size: larger;
}


#total em {
  font-size: small;
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
  cursor: pointer;
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

p {
  text-align: center;
}

#buy-now {
  font-family: 'PT Sans';
  font-size: 1.2rem;
  color: #001f3f;
  text-align: center;
}

p i {
  color: #ff4076;

}

@media screen and (max-width: 600px) {

  .routerCatalogue a {
    margin-left: 20px;
    text-align: left;
  }

  .total-container {
    display: flex;
    flex-direction: column;
  }

  .flex-buttons {
    display: inherit !important;
  }

  #total {
    font-size: medium;
  }

  #total span {
    font-size: x-large;
    margin-right: 10px;
  }

}
</style>
