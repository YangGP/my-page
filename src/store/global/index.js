const CHANGE_SIDEBAR = 'CHANGE_SIDEBAR';

export default {
  state: {
    userInfo: {
      type: '0'
    },
    showBackTop: false
  },
  actions: {
    changeSidebar({commit}, flag){
      commit(CHANGE_SIDEBAR, flag);
    }
  },
  mutations: {
    [CHANGE_SIDEBAR](state, flag) {
      state.showBackTop = flag;
    }
  }
}

