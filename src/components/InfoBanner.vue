<template>
    <q-card>
      <q-card-title>
        Next collecting time: {{ collectionTime }}
      </q-card-title>
    </q-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('main', [
            'collectionTime'
        ]),
    }

}
</script>

<style>

</style>
