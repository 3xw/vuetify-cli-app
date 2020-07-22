<template lang="html">

  <v-container fluid>
    <v-layout row wrap>
      <v-flex md6 offset-md3>
        <v-card>
          <v-toolbar color="black" dark>
            <v-toolbar-title>Retry</v-toolbar-title>
          </v-toolbar>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'retry',
  computed: {
    ...mapState({
      loginStatus: state => state.auth.loginStatus,
      error: state => state.auth.error,
      user: state => state.auth.user
    })
  },
  watch:{
    loginStatus(bool){
      return bool? this.$router.push(process.env.VUE_APP_LOGIN_REDIRECT): this.$router.push(process.env.VUE_APP_LOGIN_ACTION)
    }
  },
  mounted(){
    this.$store.dispatch('auth/retry')
  }
}
</script>
