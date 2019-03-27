<template>
  <div class="container">
    <h1 class="title">Single customer page</h1>
    <p>{{ customer.name }}</p>
    <h3>Ddts</h3>
    <ul>
      <li v-for="ddt in ddts" :key="`ddt_${ddt.id}`">
        <nuxt-link :to="{ name: 'ddt-id', params: { id: ddt.id } }">
          #{{ ddt.id }} del {{ ddt.created_at }}
        </nuxt-link>
      </li>
    </ul>
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
      return this.$store.getters['customers/getCustomer'](this.id)
    },
    ddts() {
      return this.$store.state.ddts.all
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('customers/fetchCustomer', params.id)
  },
  mounted() {
    this.$store.dispatch('ddts/fetchCustomerDdts', this.id)
  }
}
</script>
