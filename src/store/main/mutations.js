export function setBagRequestSent (state) {
  state.bagRequestSent = true
}

export function setGiveaways (state, payload) {
  state.giveaways = payload
}

export function setUser (state, payload) {
  state.user = payload
}

export function setCollectionDate (state, payload) {
  state.collectionDate = payload
}

export function updateLastGiveaway (state, payload){
  state.giveaways[state.giveaways.length-1] = payload
}