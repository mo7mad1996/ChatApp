export const state = () => ({
  user: {},
  users: [],
  messages: []
});

export const getters = {
  user: state => state.user,
  users: state => state.users,
  messages: state => state.messages
};

export const mutations = {
  updateUsers(state, users) {
    state.users = users;
  },
  setUser(state, user) {
    state.user = user;
  },
  sendMsg(state, msg) {
    state.messages.push(msg);
  },
  logout(state) {
    state.user = "  ";
  }
};

export const actions = {
  SOCKET_updateUsers({ commit }, users) {
    commit("updateUsers", users);
  },
  SOCKET_sendMsg({ commit }, msg) {
    commit("sendMsg", msg);
  },
  setUser({ commit }, user) {
    commit("setUser", user);
  },
  dropUser({ commit }) {
    sessionStorage.removeItem("user");
    commit("logout");
  }
};
