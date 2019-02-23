function tuitsReducer (state = [{
  text: 'Hola',
  quien: 'ralex',
  date: Date.now()
}], action) {
  switch (action.type) {
    case 'ADD_TUIT':
      console.log('TuitReducer addTuit', action.tuit)
      return [...state, action.tuit]
    case 'DELETE_TUIT':
      let filterTuits = state.filter((tuit) => tuit.id !== action.tuitId)
      return filterTuits
    default:
      return state
  }
}

export default tuitsReducer