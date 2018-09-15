<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <div slot="footer" class="toolbar">
      <quasar-tabs slot="footer">
        <quasar-tab icon="view_quilt" route="/showcase/layout" exact replace>About</quasar-tab>
        <quasar-tab icon="view_day" route="/showcase/layout/toolbar" replace>Toolbar</quasar-tab>
        <quasar-tab icon="view_day" route="/showcase/layout/tabs" replace>Tabs</quasar-tab>
        <quasar-tab icon="input" route="/showcase/layout/drawer" replace>Drawer</quasar-tab>
      </quasar-tabs>
    </div>
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

<style>
</style>
