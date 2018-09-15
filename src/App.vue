<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import socket from 'socket.io-client'
export default {
  name: 'App',
  mounted() {
    const io = socket('http://localhost:9000')
  },
}
</script>

<style>
</style>
