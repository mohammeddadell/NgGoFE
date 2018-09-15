<template>
  <div class="wrapper">
    <div class="ranking-wrapper">
      <Ranking />
    </div>
    <div class="bottom-modal">
    <q-select
      color="white"
      leftTextColor="white"
      rightTextColor="white"
      v-model="selectedLocation"
      :options="selectOptions"
      :inverted-light="true"
    />
      <ul>
        <li @click="onClick(1)" :class="{'animate-to-top': firstBagClicked}">
          <div class="image-wrapper">
            <img src="~assets/recycled-bag.svg"/>
          </div>
        </li>
        <li @click="onClick(2)" :class="{'animate-to-top': secondBagClicked}">
          <div class="image-wrapper">
            <img src="~assets/recycled-bag.svg"/>
          </div>
        </li>
        <li @click="onClick(3)" :class="{'animate-to-top': thirdBagClicked}">
          <div class="image-wrapper">
            <img src="~assets/recycled-bag.svg"/>
          </div>
        </li>
        <li @click="onClick(4)" :class="{'animate-to-top': fourthBagClicked}">
          <div class="image-wrapper">
            <img src="~assets/recycled-bag.svg"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { Notify } from 'quasar'
import Ranking from './Ranking'
export default {
  components: {
    Ranking
  },
  data () {
    return {
      firstBagClicked: false,
      secondBagClicked: false,
      thirdBagClicked: false,
      fourthBagClicked: false,
      selectedLocation: 1,
      selectOptions: [
        {
          label: 'Current Location',
          value: 1
        },
        {
          label: 'Hardbrücke 1, Zürich',
          value: 2
        }
      ],
    }
  },
  methods: {
    ...mapActions('main', [
      'sendBagRequest'
    ]),
    toggleBagClass (amount) {
      switch (amount) {
          case 1:
            this.firstBagClicked = !this.firstBagClicked
            break;
          case 2:
            this.secondBagClicked = !this.secondBagClicked
            break;
          case 3:
            this.thirdBagClicked = !this.thirdBagClicked
            break;
          case 4:
            this.fourthBagClicked = !this.fourthBagClicked
            break;
          default:
            throw new Exception('Function toggle not implemented for amount: ' + amount)
        }
    },

    onClick (amount) {
      Notify.create({
        message: amount + ' bags will be picked up!',
        position: 'top',
        color: 'positive'
      })
      this.sendBagRequest(amount)
      this.toggleBagClass(amount)
      setTimeout(() => {
        this.toggleBagClass(amount)
      }, 700)
    }
  }
}
</script>
<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 4em;
  flex-wrap: wrap;
}
.bottom-modal {
  background-color: rgb(103, 103, 103);
  border-radius: 15px;
  height: 20rem;
  display: flex;
  box-shadow: 1px 1px 17px rgba(0, 0, 0, 0.68);
  margin-bottom: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 97%;
}

.q-select {
  width: 90%;
  height: 4rem;
  margin-top: 3rem;

}
ul {
  list-style-type: none;
  overflow: hidden;
  padding: 0;
  display: flex;
  align-items: flex-end;
}
li {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.8);
  float: left;
  display: block;
  width: 3.5em;
  height: auto;
  margin: 1em;
  padding: 1em .5em;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

}
 @keyframes slideUp {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
.animate-to-top {
  animation-duration: .7s;
  animation-name: slideUp;
}
.ranking-wrapper {
  width: 90%;
}
</style>
