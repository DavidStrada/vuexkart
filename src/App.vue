<template>
  <div id="app">
    <div class="header">
      <header-nav></header-nav>
    </div>
    <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        <router-view/>
      </div>
      <!-- /End replace -->
    </div>
  </main>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
  }
}
</script>
