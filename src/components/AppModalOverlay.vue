<script setup>
defineProps({
  active: { type: Boolean, default: false },
});

defineEmits(["close"]);

const handleClick = () => {
  emit('show');
}
</script>
<template>
  <div class="modal-overlay">
    <div class="modal-overlay-bg" @click="$emit('close')"></div>
    <div class="modal-overlay-content">
      <span class="close" @click="$emit('close')">
        <fa icon="window-close" class="text-gray-700" />
      </span>
      <slot></slot>
      Kikou
    </div>
  </div>
</template>

<style scoped>
.close{
  position: fixed; 
}
.modal-overlay-bg{
  position: fixed; 
  background-color: green;
}
.modal-overlay-content{
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
}
@media (min-width: 800px){
  .modal-overlay-content{
    width:600px !important;
  }
}
</style>
