<template>
  <div>
    <h1>Trade and view your portofolio</h1>
    <h6>You may save and load your Data</h6>
    <h6>Click on 'End day' to begin a New Day</h6>
    <hr>
    <p>You funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
 computed: {
   funds() {
     return this.$store.getters.funds;
   }
 }
}
</script>