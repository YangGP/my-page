import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import indexStore from './indexPage';
import global from './global';

export default new vuex.Store({
  modules: {
    global,
    indexStore
  }
})