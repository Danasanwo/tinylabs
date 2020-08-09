/* eslint-disable */
import axios from 'axios'

const state = {
  employees: [],
}

const actions = {
  async fetchEmployees({ commit }) {
    const response = await axios.get(
      'https://crudcrud.com/api/413537ed77274c9a9344ebc18ce20bac/employee'
    )
    console.log(response.data)
    commit('setEmployees', response.data)
  },
  async deleteEmployees({ commit }, employ) {
    const response = await axios.delete(
      `https://crudcrud.com/api/413537ed77274c9a9344ebc18ce20bac/employee/${employ._id}`
    )
    console.log(response.data)
    // commit('deleteEmployees', response.data)
  },
}

const mutations = {
  setEmployees: function(state, employees) {
    state.employees = employees
  },
}

const getters = {
  allEmployees: (state) => state.employees,
}

export default {
  state,
  getters,
  actions,
  mutations,
}
