<template>
  <div class="container">
    <h1 class="title">Single ddt page</h1>
    <p>Ddt #{{ ddt.id }} del {{ ddt.created_at }}</p>
    <p>{{ ddtProducts }}</p>
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
    ddt() {
      return this.$store.getters['ddts/getDdt'](this.id)
    },
    ddtProducts() {
      return this.$store.getters['ddtProducts/getProducts'](this.id)
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('ddtProducts/fetchDdtProducts', params.id)
  }
}
</script>
