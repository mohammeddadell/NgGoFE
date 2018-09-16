<template>
  <div class="wrapper" >
    <q-modal minimized ref="modalRef" v-modal="modalIsOpen">
      <div style="padding: 20px">
        <div class="q-display-1 q-mb-md">Minimized Modal</div>
        <p>This one has backdrop on small screens too.</p>
        <div class="modal-buttons">
          <q-btn color="green" v-close-overlay label="Accept" @click="acceptModal"/>
          <q-btn color="red" v-close-overlay label="Close" @click="dismissModal"/>
        </div>
      </div>
    </q-modal>
    <div class="bottom-modal" id="bagsWrapper">
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
        <span class="bagAmountTxt"> 1x </span>
        </li>
        <li @click="onClick(2)" :class="{'animate-to-top': secondBagClicked}">
          <div class="image-wrapper">
            <img src="~assets/recycled-bag.svg"/>
          </div>
          <span class="bagAmountTxt"> 2x </span>
        </li>
        <li @click="onClick(3)" :class="{'animate-to-top': thirdBagClicked}">
          <div class="image-wrapper">
            <img src="~assets/recycled-bag.svg"/>
          </div>
          <span class="bagAmountTxt"> 3x </span>
        </li>
        <li @click="onClick(4)" :class="{'animate-to-top': fourthBagClicked}">
          <div class="image-wrapper">
            <img src="~assets/recycled-bag.svg"/>
          </div>
          <span class="bagAmountTxt"> 4x </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import { Notify } from 'quasar'
import Ranking from './Ranking'
import Banner from './InfoBanner'
export default {
  components: {
    Ranking, Banner
  },
  mounted () {
    this.$refs.modalRef.hide()
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
      modalIsOpen: false
    }
  },
  computed: {
    ...mapState('main', [
      'collectionTime'
    ])
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
      this.$refs.modalRef.show()
      this.sendBagRequest(amount)
      this.toggleBagClass(amount)
      setTimeout(() => {
        this.toggleBagClass(amount)
      }, 700)
    },
    dismissModal () {
      this.$refs.modalRef.hide()
    },
    acceptModal () {
      Notify.create({
        message: 'You are going to donate bags. Please wait for confirmation',
        position: 'top',
        color: 'positive',
        icon: 'thumb_up_alt'
      })
      this.$refs.modalRef.hide()
    }
  }
}
</script>
<style>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 4em;
  flex-wrap: wrap;
}
.bottom-modal {
  background-color: #ffffffb0;
  border-radius: 15px;
  height: 20rem;
  display: flex;
  box-shadow: 1px 3px 16px rgba(0, 0, 0, 0.6);
  margin-bottom: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 97%;
}

.q-select {
  width: 90%;
  height: 4rem;
  margin-top: 3rem;
  border-radius: 12px;
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
.modal-content {
  border-radius: 24px;
  text-align: center;
}
.modal-content button {
  width: 43%;
  border-radius: 30px;
}
.modal-content button.bg-red {
  box-shadow: 1px 1px 10px #f443368c;
}
.modal-content button.bg-green {
  box-shadow: 1px 1px 10px #1780288c;
}
.modal-buttons {
  display: flex;
  justify-content: space-between;
}
</style>
