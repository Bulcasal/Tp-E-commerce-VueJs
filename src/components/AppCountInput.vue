<script setup>
defineProps({
  modelValue: {
    type: [Number, String], default: 0
  },
});

const emit = defineEmits(["update:modelValue", "input"]);
const updateValue = (value) => {
  if (value !== "") {
    emit("update:modelValue", value);
  }
}
</script>

<template>
  <span>
    <button class="decrement-button" @click="updateValue(modelValue > 0 ? modelValue - 1 : null)"> - </button>
    <input :value="modelValue" type="number" min="0" @input="updateValue($event.target.value)" />
    <button class="increment-button" @click="updateValue(modelValue + 1)"> + </button>
  </span>
</template>

<style scoped>
input[type="number"] {
  appearance: none;
  -moz-appearance: textfield;
  margin: 0;
  border: none;
  text-align: center;
  width: 10vh;
}

button {
  border: 1px solid gray;
}

.decrement-button,
.increment-button {
  padding: 6px 10px;
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
  margin: 0px 50px 0px 40px;
}

.align-row-items{
  margin: 10px;
}
</style>