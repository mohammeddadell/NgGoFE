<template>
  <div class="cards-wrapper">
    <div class="row justify-center">
      <StatusCard v-for="status in statuses" :status="status"/>
    </div>
  </div>
</template>
<script>
import StatusCard from './StatusCard.vue'

export default {
  data () {
    return {
      statuses: [
        { status: 'in progress', date: '23. 09. 2018' },
        { status: 'waiting', date: '-' }
      ]
    }
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
</style>
