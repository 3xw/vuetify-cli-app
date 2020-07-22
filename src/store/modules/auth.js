import {client, parseResponse} from '@/api'

export default {
  namespaced: true,

  state: {
    loginStatus: false,
    error: '',
    user: null
  },
  actions: {
    login ({commit}, {username, password, remember})
    {
      client
        .setRememberMe(remember)
        .setBasicAuth(username, password)
        .post('/users/who-am-i')
        .then(({data}) => commit('login',{user: data.data}))
        .catch((error) => commit('error',{error}))
    },
    retry({commit})
    {
      client
        .get('/users/who-am-i')
        .then(({data}) => commit('login',{user: data.data}))
        .catch((error) => commit('error',{error}))
    }
  },
  mutations: {
    login (state, { user })
    {
      state.loginStatus = true
      state.error = ''
      state.user = user
    },
    error(state, { error })
    {
      state.loginStatus = false
      state.error = error.message
    }
  }
}
