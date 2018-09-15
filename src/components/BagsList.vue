<template>
  <div>
    <ul>
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
      <li>
        <div class="image-wrapper">
          <img src="~assets/recycled-bag.svg"/>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
ul {
  list-style-type: none;
  overflow: hidden;
  padding: 0;
}
li {
  background-color: black;
  float: left;
  display: block;
  width: 5em;
  height: auto;
  margin: 1em;
  padding: 2em 1em;
  border-radius: 15px;
  box-shadow: 1px 1px 1px black;
}

</style>
