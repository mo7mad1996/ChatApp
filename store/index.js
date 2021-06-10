export const state = () => ({
  user: false,
});
export const getters = {
  user: (state) => state.user,
};

export const mutations = {
  setUser(state) {
    state.user = true;
  },
  out(state) {
    state.user = false;
  },
};

export const actions = {
  login({ commit }) {
    commit("setUser");
  },
  out({ commit }) {
    commit("out");
  },
};
