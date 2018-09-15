<template>
  <div>
    <ul>
      <li @click="sendBagRequest(1)">
        <div class="image-wrapper">
          <img src="~assets/recycled-bag.svg"/>
        </div>
      </li>
      <li>
        <div class="image-wrapper">
          <img src="~assets/recycled-bag.svg"/>
        </div>
      </li>
      <li>
        <div class="image-wrapper">
          <img src="~assets/recycled-bag.svg"/>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('main', [
      'sendBagRequest'
    ])
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  overflow: hidden;
  padding: 0;
}
li {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.8);
  float: left;
  display: block;
  width: 5em;
  height: auto;
  margin: 1em;
  padding: 2em 1em;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

</style>
