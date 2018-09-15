import axios from 'axios'

export function sendBagRequest ({ commit }, amount) {
  commit('setBagRequestSent')
}

