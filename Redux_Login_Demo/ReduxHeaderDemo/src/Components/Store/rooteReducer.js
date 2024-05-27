import { combineReducers } from "redux";
import userReducer from '../Feature/userSlice'

const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer