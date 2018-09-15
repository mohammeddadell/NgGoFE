<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import socket from 'socket.io-client'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions('main', [
      'fetchFirstUser'
    ])
  },
  mounted() {
    const io = socket('http://localhost:9000')
    this.fetchFirstUser()
  },
}
</script>

<style>
</style>
