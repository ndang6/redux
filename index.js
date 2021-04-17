const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

// const initialState = {
//   numOfCakes: 10,
//   numberOfIceCream: 5
// }

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCream: 5
}

function buyCake(){
  return {
    type: 'BUY_CAKE',
    info: 'My Info'
  }
}

function buyIceCream(){
  return {
    type: 'BUY_ICE_CREAM',
    info: 'My Info'
  }
}

// const reducer = (state = initialState, action) => {
//   switch(action.type) {
//     case 'BUY_CAKE': return {
//       ...state,
//       numOfCakes: state.numOfCakes - 1
//     }
//     case 'BUY_ICE_CREAM': return {
//       ...state,
//       numberOfIceCream: state.numberOfIceCream - 1
//     }
//     default: return state
//   }
// }

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case 'BUY_CAKE': return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {
    case 'BUY_ICE_CREAM': return {
      ...state,
      numOfIceCream: state.numOfIceCream - 1
    }
    default: return state
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))

// const store = createStore(reducer)
console.log('Initial state', store.getState())
const subscription = store.subscribe(() => {}) // listener
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
subscription() // unsubscribe