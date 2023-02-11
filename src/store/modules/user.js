import { usersApi } from "../../services/users-api";

export default {
  actions: {
    async fetchUsers({ commit }) {
      await usersApi.getUsers().then(users => commit("addUsers", users));
    }
  },
  mutations: {
    addUsers(state, users) {
      state.users = users;
    }
  },
  state: {
    users: []
  },
  getters: {}
};
