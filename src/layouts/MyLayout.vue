<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
      <div class="layout-padding docs-tab-pane row justify-center">
          <q-tabs class="tabs" inverted color="secondary" align="justify">
              <q-tab default positioname="Home" slot="title" icon="home" label="Home"/>
              <q-tab name="scan_tool" slot="title" icon="loyalty" label="Delivery Status" />
          </q-tabs>
        </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style scoped>
.docs-tab-pane {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding-left: 0;
  padding-right: 0;
}
.tabs {
  width: 100%;
}
</style>
