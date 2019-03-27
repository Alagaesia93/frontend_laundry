<template>
  <section class="container">
    <div>
      <h1 class="title">
        Customers Page
      </h1>
      <div class="links">
        <h3>Clienti</h3>
        <ul>
          <li v-for="customer in customers" :key="`customer_${customer.id}`">
            <nuxt-link :to="{ name: 'cus-id', params: { id: customer.id } }">
              {{ customer.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="links">
        <h3>Prodotti</h3>
        <ul>
          <li v-for="product in products" :key="`product_${product.id}`">
            {{ product.name }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    customers() {
      return this.$store.state.customers.all
    },
    products() {
      return this.$store.state.products.all
    }
  },
  async fetch({ store }) {
    await store.dispatch('customers/fetchAllCustomers')
    await store.dispatch('products/fetchAllProducts')
  }
}
</script>
