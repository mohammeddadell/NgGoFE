<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
      <div class="layout-padding docs-tab-pane row justify-center">
          <q-tabs class="tabs" inverted color="secondary" align="justify">
              <q-tab default positioname="Home" slot="title" icon="home" label="Home" @click="goTo('/')"/>
              <q-tab default positionname="scan_tool" slot="title" icon="loyalty" label="Delivery Status" @click="goTo('/status')"/>
              <q-tab name="scan_tool" slot="title" icon="offline_bolt" label="Badges" @click="goTo('/ranking')"/>
          </q-tabs>
        </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    goTo (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
.docs-tab-pane {
  position: fixed;
  width: 100%;
  bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
}
.tabs {
  width: 100%;
}
.q-layout-page-container {
  background-color: #e8e8e8;
}
.q-card-title {
  text-align: center;
}
</style>
