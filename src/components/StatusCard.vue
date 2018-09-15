<template>
  <div class="status-card">
    <q-card>
      <q-card-title>
        {{ giveaway.amount }} Bags
      </q-card-title>
      <q-card-separator />
        <q-card-main>
          {{ giveaway.timestamp }}
          </br>
          <q-icon name="check_circle_outline"/>
      </q-card-main>
    </q-card>
  </div>
</template>
<script>
export default {
  props: {
    giveaway: {
      required: true
    }
  },
  mounted() {
    console.log(this.giveaway)
  },
}
</script>
<style>
.status-card {
  width: 100%;
}
</style>
