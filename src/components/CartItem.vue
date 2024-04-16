<script setup>
defineProps({
    product: { type: Object, required: true },
    count: { type: Number, required: true },
});

defineEmits(["updateCount", "clear"]);
</script>

<template>
    <li class="listCartItems">
        
        <img :src="product.image" alt="Product Image" width="100" />
        <span> {{ product.name }}</span>
 
        <AppCountInput :model-value="count" @update:modelValue="$emit('updateCount', $event)" />

        <span class="">{{ count * product.unit_price }} €</span>
        <span @click="$emit('clear')">
            <i class="fa-solid fa-trash"></i>
        </span>
    </li>
</template>

<style>

.listCartItems {
    display: flex;
    justify-content: center;
}

.listCartItems img  {
    max-width: 150px !important;
    height: 50%;
    margin-right: 50px;
}

.fa-trash {
    color: #db3765;
}

span {
    font-family: 'PT Sans';
    margin: 50px 50px 0 0 ;
}
</style>