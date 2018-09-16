<template>
  <div class="status-card">
    <q-card>
      <q-card-title>
        <q-icon class="big-icon" :name="icon(giveaway.status)" :color="color(giveaway.status)"/> {{ giveaway.amount }} Bags
      </q-card-title>
      <q-card-separator />
        <q-card-main>
          {{ giveaway.timestamp }}
      </q-card-main>
    </q-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      icons: {
        2: { icon: 'check_circle_outline', color: 'green'},
        1: { icon: 'warning', color: 'yellow'},
        0: { icon: 'highlight_off', color: 'red'},
      }
    }
  },
  props: {
    giveaway: {
      required: true
    }
  },
  mounted() {
    console.log(this.giveaway)
  },
  computed: {
    icon () {
      return (status) => this.icons[status].icon
    },
    color () {
      return (status) => this.icons[status].color
    }
  }
}
</script>
<style>
.status-card .q-card {
  width: 100%;
  background-color: white;
  margin-top: 1em;
  margin-bottom: 1em;
  border-radius: 17px;
}
.big-icon {
  font-size: 2em;
  float: left;
}
</style>
