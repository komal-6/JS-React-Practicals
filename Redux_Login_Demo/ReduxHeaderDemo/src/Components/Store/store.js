import {thunk} from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../Store/rooteReducer'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store