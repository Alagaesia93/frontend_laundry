export const state = () => ({
  all: []
})

export const actions = {
  async fetchDdtProducts({ commit }, ddtId) {
    const products = await this.$axios.$get(`ddts/${ddtId}/ddt_products`)
    commit('SET_DDTS', products)
  }
}

export const mutations = {
  SET_DDTS(state, ddts) {
    state.all = ddts
  }
}

export const getters = {
  getProducts: state => id => {
    return state.all.find(ddtProd => ddtProd.ddt_id === Number(id))
  }
}
