<template>
    <li class="list-cart-items">
        <img :src="product.image" alt="Product_Image" width="100" />
        <span id="product-name"> {{ product.name }}</span>
        <div id="count-input-container">
            <AppCountInput :model-value="count" @update:modelValue="$emit('updateCount', $event)" />
        </div>
        <div id="count-product">
            <span>{{ count * product.unit_price }} €</span>
            <span @click="$emit('clear')">
                <i class="fa-solid fa-trash"></i>
            </span>
        </div>
    </li>
</template>

<script setup>
defineProps({
    product: { type: Object, required: true },
    count: { type: Number, required: true },
});

defineEmits(["updateCount", "clear"]);
</script>

<style>
.list-cart-items {
    display: flex;
    justify-content: center;
}

.list-cart-items img {
    max-width: 150px !important;
    height: 50%;
    margin-right: 50px;
}

.fa-trash {
    color: #db3765;
}

#count-product {
    margin-top: 43px;
}

#count-input-container {
    margin-top: 43px;
}
span {
    font-family: 'PT Sans';
    margin: 50px 50px 0 0;
}

@media screen and (max-width: 600px) {
    .list-cart-items {
        flex-direction: column;
    }

    span {
        text-align: center;
    }
    #count-product {
        text-align: center;
        font-size: larger;
    }

    #product-name {
        font-size: larger;
    }
    .list-cart-items img {
        max-width: 200px !important;
    }
}
</style>