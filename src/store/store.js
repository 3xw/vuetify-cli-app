import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
import timeRecords from '@/store/modules/timeRecords';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth,
    timeRecords,
  }
})
