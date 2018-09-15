<template>
  <div class="status-card">
    <q-card>
      <q-card-title>
        2 Bags
      </q-card-title>
      <q-card-separator />
        <q-card-main>
          {{ status.date }}
          </br>
          <q-icon name="check_circle_outline"/> {{ status.status }}
      </q-card-main>
    </q-card>
  </div>
</template>
<script>
export default {
  props: {
    status: {
      required: true
    }
  }
}
</script>
<style>
.status-card {
  width: 100%;
}
</style>
