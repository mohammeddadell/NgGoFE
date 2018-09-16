<template>
  <q-page class="row justify-center" id="bagCont">
   <h3 id="helloTxt">Hello! Let's Donate</h3>
<img id="helloImg" src="~assets/hello.png">
    <BagsList id="BagsList"/>
  </q-page>
</template>

<style>
</style>
<script>
import BagsList from '../components/BagsList'
export default {
  name: 'PageIndex',
  components: {
    BagsList
  }
}
</script>
