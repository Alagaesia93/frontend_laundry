<template>
  <div class="container">
    <h1 class="title">Single customer page</h1>
    <p>{{ customer }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    customer() {
      return this.$store.state.customers.all.find(
        customer => customer.id === Number(this.id)
      )
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('customers/fetchCustomer', params.id)
  }
}
</script>
