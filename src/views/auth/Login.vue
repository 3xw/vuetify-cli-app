<template lang="html">

  <form class="form-horizontal" role="form" method="POST" v-on:submit.prevent="login" >
  <v-layout row wrap>
    <v-flex md6 offset-md3>
      <v-card>

        <v-toolbar color="black" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <v-alert :value="error != ''" type="warning">{{error}}</v-alert>

        <!--  -->
        <v-card-text>
          <v-text-field v-model="username" label="Username" hint="Your username here" persistent-hint ></v-text-field>
          <v-text-field v-model="password" label="Password" type="password" hint="Your password here" persistent-hint ></v-text-field>
          <v-checkbox label="Remember me" v-model="remember"></v-checkbox>
          <v-btn color="success" type="submit">login</v-btn>
        </v-card-text>

      </v-card>
    </v-flex>
  </v-layout>
  </form>

</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {username: '', password: '', remember: true}
  },
  computed: {
    ...mapState({
      loginStatus: state => state.auth.loginStatus,
      error: state => state.auth.error,
      user: state => state.auth.user
    })
  },
  watch:{
    loginStatus(bool){
      if(bool) this.$router.push(process.env.VUE_APP_LOGIN_REDIRECT)
    }
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login', {username: this.username, password: this.password, remember: this.remember})
    }
  }
}
</script>
