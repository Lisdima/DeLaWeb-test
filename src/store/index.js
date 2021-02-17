import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    async fetchUsers(context) {
      let response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=1");
      let users = await response.json();
    //   this.users = users;

    context.commit('updateUsers', users)
    },
  },
  mutations: {
      updateUsers(state, users) {
          state.users = users
      }
  },
  state: {
    users: [],
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
  },

  modules: {},
});
