<template>
  <span class="count-input">
    <button class="decrement-button" @click="updateValue(modelValue > 0 ? modelValue - 1 : null)"> <i
        class="fa-solid fa-minus"></i> </button>
    <input :value="modelValue" type="number" min="0" @input="updateValue($event.target.value)" />
    <button class="increment-button" @click="updateValue(modelValue + 1)"> <i class="fa-solid fa-plus"></i> </button>
  </span>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [Number, String],
    default: 0
  },
});

const emit = defineEmits(["update:modelValue", "input"]);
const updateValue = (value) => {
  if (value !== "") {
    emit("update:modelValue", value);
  }
}
</script>

<style scoped>
input[type="number"] {
  appearance: none;
  -moz-appearance: textfield;
  margin: 0;
  border: none;
  text-align: center;
  width: 40px;
}

button {
  border: 1px solid gray;
}

.decrement-button,
.increment-button {
  padding: 1px 5px;
  border-radius: 50%;
  background-color: #073665;
  color: white;
  font-size: large;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.decrement-button:hover,
.increment-button:hover {
  background-color: #051f41;
}

span {
  margin: 50px 50px 50px 40px;
}

.align-row-items {
  margin: 10px;
}


@media screen and (max-width: 600px) {
  .count-input {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  span {
    text-align: center;
  }

  .count-input input {
    width: 90px;
    font-size: larger;
  }

  .decrement-button,
  .increment-button {
    padding: 20px 20px;
    font-size: larger;
  }

  #count-product {
    font-size: x-large;
  }

}
</style>