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

export const getters = {
  getCustomer: state => id => {
    return state.all.find(customer => customer.id === Number(id))
  },
  getCustomerProducts: (state, getters) => id => {
    return getters.getCustomer(id).customerProducts
  }
}
