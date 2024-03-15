<template>
  <div class="mainContainer">
    <h2>Mon panier:</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        <img :src="item.image" alt="Product Image" />
        <div class="liText">
          <p>{{ item.name }}</p>
          <p>Prix unitaire: {{ item.unit_price }}</p>
          <p>Quantité:
            <input type="number" v-model="item.quantity" @input="updateItemTotal(item)" min="0" />
          </p>
          <p>Prix: {{ item.total }} €
            <i class="fa-solid fa-xmark" @click="deleteFromCart(item)" id="deleteButton"></i>
          </p>
        </div>
      </li>
    </ul>
  </div>
  <Shipment />
  <div id="total">Total: {{ total }} €</div>
  <button id="validateCart">Valider le panier</button>
</template>

<script>
import { ref, computed } from 'vue';
import Shipment from './Shipment.vue';

export const cartItems = ref([]);

export const addToCart = (product) => {
  const existingItem = cartItems.value.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.value.push({
      id: product.id,
      image: product.image,
      name: product.name,
      unit_price: product.unit_price,
      quantity: 1,
      total: product.unit_price
    });
  }
};

export const deleteFromCart = (item, updateTotal) => {
  const index = cartItems.value.findIndex(cartItem => cartItem.id === item.id);
  if (index !== -1) {
    cartItems.value.splice(index, 1);
  }
};

export default {
  components: {
    Shipment
  },
  setup() {
    const shipments = ref([]);
    const total = computed(() => {
      return cartItems.value.reduce((acc, item) => acc + (item.unit_price * item.quantity), 0);
    });

    const updateItemTotal = (item) => {
      item.total = item.unit_price * item.quantity;
    };

    const updateTotal = () => {
      let newTotal = 0;
      for (const item of cartItems.value) {
        newTotal += item.unit_price * item.quantity;
      }
      total.value = newTotal;
    };

    return { cartItems, total, updateItemTotal, deleteFromCart, updateTotal };
  }
};
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
  font-size: x-large;
  font-weight: bold;
  color: #ff4076;
}

#validateCart {
  background-color: white;
  margin: 15px;
  padding: 10px;
  font-size: large;
  border-radius: 10px;
  border: 1px solid #ff4076;
  color: #ff4076;
  transition: color .20s ease-in-out, background-color .20s ease-in-out, border-color .20s ease-in-out, box-shadow .20s ease-in-out;
}

#validateCart:hover {
  background-color: #ff4076;
  color: white;
}
</style>
