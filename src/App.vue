<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions('main', [
      'fetchFirstUser'
    ])
  },
  mounted() {
    this.fetchFirstUser()
  },
}
</script>

<style>
</style>
