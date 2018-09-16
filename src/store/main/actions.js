import axios from 'axios'

const r = axios.create({
  baseURL: 'http://localhost:9000/',
})

const currentLocation = {
  "latitude": "47.3880275",
  "longitude": "8.517616",
  "street": "Technoparkstrasse",
  "number": "1",
  "city": "Zürich",
  "zip": "8000",
  "country": "CH"
}

export function fetchFirstUser ({ commit }) {
  r.get('user/')
  .then(res => {
    commit('setUser', res.data[0])
  })
  .catch(err => {
    console.log(err)
  })
}

export function sendBagRequest ({ commit, state }, amount) {
  r.post('giveaway/', {
    user: state.user._id,
    amount,
    location: currentLocation
  })
  .then(res => {
    commit('setBagRequestSent')
  })
  .catch(err => {
    console.log(error)
  })
}

export function getUsersGiveaways ({ commit, state }) {
  r.get('user/' + state.user._id)
  .then(res => {
    commit('setGiveaways', res.data.giveaways)
  })
  .catch(err => {
    console.log(err)
  })
}

