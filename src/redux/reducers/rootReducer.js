import { combineReducers } from 'redux'
import authReducer from './authReducer'
import cartReducer from './cartReducer'

const appReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
