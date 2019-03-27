<template>
  <section class="container">
    <div>
      <h1 class="title">
        Customers Page
      </h1>
      <div class="links">
        <nuxt-link
          v-for="customer in customers"
          :key="customer.id"
          :to="{ name: 'cus-id', params: { id: customer.id } }"
        >
          {{ customer.name }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    customers() {
      return this.$store.state.customers.all
    }
  },
  async fetch({ store }) {
    await store.dispatch('customers/fetchAllCustomers')
  }
}
</script>
