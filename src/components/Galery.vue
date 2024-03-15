<template>
  <h2>Tous nos produits</h2>
  <div class="grid">
    <div id="catalogue">
      <div v-for="product in products" :key="product.id" class="product">
        <div id="productName">
          <p>{{ product.name }}</p>
        </div>
        <img :src="product.image" alt="Product Image" />
        <p>{{ product.unit_price }} €</p>
        <div class="buttons">
          <button @click="openModal(product)" id="showProduct">Voir le produit</button>
          <button @click="addToCartHandler(product)" id="addProduct">Ajouter au panier</button>
        </div>
      </div>
    </div>
  </div>

  <router-link to="/panier">Voir mon panier</router-link>
  <div class="modal" :class="{ 'showModal': showModal }">
    <Product :product="selectedProduct" @close="closeModal" :showModal="showModal" />
  </div>


</template>

<script>
import { ref, onMounted } from 'vue';
import Product from './Product.vue';
import Cart, { addToCart, cartItems } from './Cart.vue';

export default {
  components: {
    Product,
    Cart,
  },
  setup() {
    const products = ref([]);
    const showModal = ref(false);
    const selectedProduct = ref([]);

    onMounted(() => {
      fetch('./data.json')
        .then(response => response.json())
        .then(data => {
          products.value = data.products;
        })
        .catch(error => console.error('Erreur de chargement des données :', error));
    });

    const addToCartHandler = (product) => {
      addToCart(product);
    };

    const openModal = (product) => {
      console.log(selectedProduct, 'openmodale');
      selectedProduct.value = product;
      showModal.value = true;
      console.log(showModal, 'showmodal');
    };
    const closeModal = () => {
      showModal.value = false;
    };
    return { products, addToCartHandler, cartItems, showModal, openModal, closeModal, selectedProduct };
  },
};
</script>

<style scoped>
.showModal {
  display: block;
  z-index: 99;
  width: 40%;
  background-color: blueviolet;
}

* .productCatalogue {
  display: grid;
}

.grid {
  display: flex;
  justify-content: center;
}

#catalogue {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  justify-content: center;
  margin: 0 auto;
}

.product {
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 0.5rem;
  text-align: center;
  width: fit-content;
  max-width: 250px;
}

.product:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: color .20s ease-in-out, background-color .20s ease-in-out, border-color .20s ease-in-out, box-shadow .20s ease-in-out;
}

.product p {
  text-align: center;
  font-size: medium;
  margin: 8px;
}

.product img {
  max-width: 100%;
  height: auto;
  margin: 10px 5px 0px 5px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.buttons {
  display: flex;
  flex-direction: column;
}

#showProduct {
  background-color: white;
  margin: 15px;
  padding: 10px;
  font-size: large;
  border-radius: 10px;
  border: 1px solid #120954;
  color: #120954;
  transition: color .20s ease-in-out, background-color .20s ease-in-out, border-color .20s ease-in-out, box-shadow .20s ease-in-out;
}

#showProduct:hover {
  background-color: #120954;
  color: white;
}

#addProduct {
  background-color: white;
  margin: 15px;
  padding: 10px;
  font-size: large;
  border-radius: 10px;
  border: 1px solid #18bc9c;
  color: #18bc9c;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

#addProduct:hover {
  background-color: #18bc9c;
  color: white;
}

/* Modale */
.isActive {
  display: block;
  z-index: 99;
}

.modal {
  display: none;
  position: fixed;
  z-index: 99;
  top: 50%;
  left: 50%;
  height: fit-content;
  width: 55%;
  background-color: rgba(255, 255, 255, 0.9);
  transform:translate(-50%, -50%);
}

.showModal {
  display: block;
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}


@keyframes modalFadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes modalFadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.modal.fade-in {
  animation: modalFadeIn 0.3s ease-in-out;
}

.modal.fade-out {
  animation: modalFadeOut 0.3s ease-in-out;
}
</style>
