export const state = () => ({
  all: []
})

export const actions = {
  async fetchAllProducts({ commit }) {
    const products = await this.$axios.$get('products')
    debugger
    commit('SET_PRODUCTS', products)
  },

  async fetchProduct({ commit }, id) {
    const product = await this.$axios.$get(`products/${id}`)
    debugger
    commit('SET_PRODUCT', product)
  }
}

export const mutations = {
  SET_PRODUCT(state, product) {
    debugger
    state.all.push(product)
  },
  SET_PRODUCTS(state, products) {
    debugger
    state.all = products
  }
}
