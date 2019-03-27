export const state = () => ({
  all: []
})

export const actions = {
  async fetchCustomerDdts({ commit }, customerId) {
    const ddts = await this.$axios.$get(`ddts?customerId=${customerId}`)
    commit('SET_DDTS', ddts)
  }
}

export const mutations = {
  SET_DDTS(state, ddts) {
    state.all = ddts
  }
}

export const getters = {
  getDdt: state => id => {
    return state.all.find(ddt => ddt.id === Number(id))
  }
}
