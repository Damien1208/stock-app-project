<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>- Price: {{stock.price.toLocaleString()}}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input 
          type="number" 
          class="form-control" 
          placeholder="Quantity"
          v-model.number="quantity"
          :class="{danger: insufficientFund}"
          />
        </div>
        <div class="pull-right">
          <button 
          class="btn btn-success" 
          @click="buyStock"
          :class="{'btn-danger': insufficientFund}"
          :disabled="insufficientFund || !Number.isInteger(quantity) ||quantity <= 0"
          > {{ insufficientFund ? 'Not enough funds' : 'Buy'}} </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientFund() {
      return this.quantity * this.stock.price > this.funds;
    },
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        quantity: this.quantity,
        stockPrice: this.stock.price
      };
      this.$store.dispatch('buyStock', order)
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>