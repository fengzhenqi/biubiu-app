import Vue from 'vue'
import Vuex from 'vuex'
import url from '../assets/laofangzi.jpg'
import url1 from '../assets/tulip.jpeg'
import url2 from '../assets/wyf.jpg'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active: {
      name: '图片1',
      url: url,
      initialIndex: 0
    },
    dict: [
      {
        name: '图片1',
        url: url,
        initialIndex: 0
      },
      {
        name: '图片2',
        url: url1,
        initialIndex: 1
      },
      {
        name: '图片3',
        url: url2,
        initialIndex: 2
      },
    ]
  },
  mutations: {
    setActive(state, payload) {
      state.active = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
