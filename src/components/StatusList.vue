<template>
  <div class="cards-wrapper">
    <h2>Giveaways</h2>
    <div>
      <StatusCard v-for="giveaway in giveaways" :giveaway="giveaway"/>
    </div>
  </div>
</template>
<script>
import StatusCard from './StatusCard.vue'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      statuses: [
        { status: 'in progress', date: '23. 09. 2018' },
        { status: 'waiting', date: '-' }
      ]
    }
  },
  computed: {
    ...mapState('main', [
      'giveaways'
    ])
  },
  components: {
    StatusCard
  }
}
</script>
<style>
.cards-wrapper {
  width: 80%;
  margin: 0 auto;
}
h2 {
  font-weight: bold
}
</style>
