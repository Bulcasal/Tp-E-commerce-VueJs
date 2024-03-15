<template>
  <div class="modal showModal" v-if="showModal">
    <i class="fa-solid fa-xmark" @click="closeModal" id="close"></i>
    <div class="product-details">
      <h2>{{ product.name }}</h2>
      <img :src="product.image" alt="Product Image" id="imgModal"/>
      <p>Description: {{ product.description }}</p>
      <p id="modalDetails">Prix: {{ product.unit_price }} €</p>
      <p>Quantité: {{ product.quantity }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    showModal: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>

.modal showModal{
  display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    height: auto;
    transform:translate(-50%, -50%);
    width: fit-content;

}
#imgModal {
  width: fit-content;
  border-radius: 8px;
  margin: 10px;
  
}
#close {
  color: #ff4076;
  font-size: x-large;
  padding: 5px;
  margin: 5px;
}

#close:hover,
#close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
