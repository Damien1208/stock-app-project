<template>
<div class="container">
 <app-stock v-for="stock in stockPortofolio" :key="stock.id" :stock="stock"></app-stock>
</div>

</template>

<script>
import { mapGetters } from 'vuex'
import Stock from './Stock.vue'

export default {
  computed: {
    ...mapGetters(['stockPortofolio'])
  },
  components: {
    appStock: Stock
  }
}
</script>