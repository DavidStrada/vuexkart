<template>
    <div class=" rounded overflow-hidden shadow-lg mb-1">
        <div class="relative">
            <img class="w-full" :src="product.image" :alt="product.title">
            <p class="absolute bottom-0 right-0 bg-gray-800 text-white px-5 py-2">Price : $ {{ product.price }}</p>
        </div>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ product.title }}</div>
            <p class="text-gray-700 text-base">
                {{ product.description }}
            </p>
        </div>
        <div class="px-6 py-4">
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" @click="addToCart">
                Add to cart
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        'name' : 'Card',
        props: ['product'],
        methods: {
            ... mapActions({
              addProductToCart: 'addProductToCart'
            }),
            addToCart() {
              this.addProductToCart({
                product: this.product,
                quantity: 1
              })
            }
        }
    }
</script>
