<template lang="html">
  <v-container fluid>
    <v-layout row wrap>
      <v-flex md6 offset-md3>
        <v-card>
          <v-toolbar color="black" dark>
            <v-toolbar-title>Redirect</v-toolbar-title>
          </v-toolbar>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'redirect',
  mounted()
  {
    this.$router.push('/')
    /*
    switch(this.$store.state.auth.user.role)
    {
      case 'Business Owner': return this.$router.push('/pro/dashboard')
    }
    */
  }
}
</script>

<style lang="css">
</style>
