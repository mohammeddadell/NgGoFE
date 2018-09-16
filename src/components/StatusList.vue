<template>
  <div class="cards-wrapper">
    <HelpButton/>
    <h2>Giveaways</h2>
    <div>
      <StatusCard v-for="giveaway in giveaways" :giveaway="giveaway"/>
    </div>
  </div>
</template>
<script>
import StatusCard from './StatusCard.vue'
import { mapState } from 'vuex'
import HelpButton from './HelpButton.vue'

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
  watch: {
    giveaways: function (newG, oldG) {
      console.log('old:', oldG, ' - new:', newG);
      
    }
  },
  components: {
    StatusCard, HelpButton
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
