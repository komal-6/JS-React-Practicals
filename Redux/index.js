const redux = require('redux')
const redux_logger = require('redux-logger')


const createStore = redux.createStore
const combinedReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware  //Apply Middleware
const logger = redux_logger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAMS = 'ICE-CREAMS'


//Action creator which create the action
function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'Redux demo'
    }
}

//Action
function buyIcecreams(){
    return{
        type: BUY_ICECREAMS
    }
}


// (previousState, action) => newState

// const initialState = {
//  numOfCakes: 10,
//  numOfIcecreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIcecreamState = {
     numOfIcecreams: 20
}
// const reducer = (state = initialState, action) =>{
//     switch(action.type){
//         case BUY_CAKE : return{
//             ...state,              //Spread operator of the state of the object
//             numOfCakes: state.numOfCakes - 1
//         }

//         case BUY_ICECREAMS : return{
//             ...state,              //Spread operator of the state of the object
//             numOfIcecreams: state.numOfIcecreams - 1
//         }
//         default: return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) =>{
    switch(action.type){
        case BUY_CAKE : return{
            ...state,              //Spread operator of the state of the object
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}


const icecreamsReducer = (state = initialIcecreamState, action) =>{
    switch(action.type){
        case BUY_ICECREAMS : return{
            ...state,              //Spread operator of the state of the object
            numOfIcecreams: state.numOfIcecreams - 1
        }
        default: return state
    }
}

const rootReducer = combinedReducers({
    cake: cakeReducer,
    icecreams: icecreamsReducer

})
const store = createStore(rootReducer,applyMiddleware(logger))
console.log('Initial State',store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecreams())
store.dispatch(buyIcecreams())
unsubscribe()