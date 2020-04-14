<template>
  <div class="flex flex-wrap">
    <div class="w-full md:w-1/4 mb-5">
      <sidebar></sidebar>
    </div>
    <div class="w-full md:w-3/4">
      <div class="sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <card v-for="(product, index) in products" :key="index" :product="product"></card>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex"
import Card from '@/components/Card'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'Home',
  components: {
    Card,
    Sidebar
  },
  computed: {
    ...mapGetters({
      products: 'products'
    })
  },
  methods: {
    ...mapActions({
      getProducts: 'getProducts'
    }),
  },
  mounted() {
    this.getProducts()
  }
}
</script>
