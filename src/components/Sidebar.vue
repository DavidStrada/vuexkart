<template>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg md:mr-6">
    <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
            {{ cartCount }} Cart Item(s)
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
            Products added to your cart
        </p>
    </div>
    <div>
        <ul v-if="cart.length">
            <li class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:px-6" v-for="(item, index) in cart" :key="index">
                <span class="text-sm leading-5 font-medium text-gray-500 col-span-2">{{ item.quantity }} x {{ item.product.title }} @ ${{ item.product.price }}</span>
                <div class="col-span-1">
                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow" @click="removeItem(item, item.quantity)">
                        remove
                    </button>
                </div>
            </li>
        </ul>

        <ul v-else>
            <li class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:px-6">
                <span class="text-sm leading-5 font-medium text-gray-600">No Items in cart</span>
            </li>
        </ul>

        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-1  sm:px-6 border-t border-gray-200">
            <dt class="text-md leading-5 font-medium text-gray-500">
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" @click="clearCart">
                Clear cart
            </button>
            </dt>
        </div>
    </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'Sidebar',

        computed: {
            ... mapGetters({
                cart: 'cart',
                cartCount: 'cartCount'
            })
        },
        methods: {
            ... mapActions({
                removeProductFromCart: 'removeProductFromCart',
                clearCart: 'clearCart',
                getProductsFromCart: 'getProductsFromCart'
            }),
            removeItem(item, quantity) {
                this.removeProductFromCart(item, quantity)
            }
        },
        mounted() {
            this.getProductsFromCart()
        }
    }
</script>

<style scope>
    .bg-gray-50 {
        background-color: #f9fafb;
    }
</style>
