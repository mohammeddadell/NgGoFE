<template>
  <q-page class="row justify-center">
    <StatusList/>
  </q-page>
</template>
<script>
import StatusList from '../components/StatusList'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'PageIndex',
  components: {
    StatusList
  },
  methods: {
    ...mapActions('main', [
      'getUsersGiveaways'
    ])
  },
  mounted() {
    this.getUsersGiveaways()
  },
}
</script>
<style>
</style>
