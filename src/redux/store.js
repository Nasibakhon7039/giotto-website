import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import thunkMiddleware from 'redux-thunk'

const persistConfig = {
  key: 'data',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export const persistor = persistStore(store)
