export const state = () => ({
  all: []
})

export const actions = {
  async fetchAllProducts({ commit }) {
    const products = await this.$axios.$get('products')
    commit('SET_PRODUCTS', products)
  },

  async fetchProduct({ commit }, id) {
    const product = await this.$axios.$get(`products/${id}`)
    commit('SET_PRODUCT', product)
  }
}

export const mutations = {
  SET_PRODUCT(state, product) {
    state.all.push(product)
  },
  SET_PRODUCTS(state, products) {
    state.all = products
  }
}
