export const state = () => ({
  all: []
})

export const actions = {
  async fetchAllCustomers({ commit }) {
    const customers = await this.$axios.$get('customers')
    commit('SET_CUSTOMERS', customers)
  },

  async fetchCustomer({ commit }, id) {
    const customer = await this.$axios.$get(`customers/${id}`)
    commit('SET_CUSTOMER', customer)
  }
}

export const mutations = {
  SET_CUSTOMER(state, customer) {
    state.all.push(customer)
  },
  SET_CUSTOMERS(state, customers) {
    state.all = customers
  }
}
