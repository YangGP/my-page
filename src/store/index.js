import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

const state = {
  userInfo: {
    type: '0'
  },
  articles: [{
    name: 'article1',
    backPic: '/public/imgs/asdf.png'
  }, {
    name: 'article2',
    backPic: '/public/imgs/asdf.png'
  }, {
    name: 'article3',
    backPic: '/public/imgs/asdf.png'
  }]
};

export default new vuex.Store({
  state
})