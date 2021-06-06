export default {
  namespaced: true,
  state: () => ({
    userName : ''
  }),
  getters: '',
  mutations: '',
  actions: {
    inputUserName(context, payload) {
      context.state.userName = payload
    }
  }
}