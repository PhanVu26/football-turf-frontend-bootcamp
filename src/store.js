import { configureStore } from '@reduxjs/toolkit'
import turfReducer from './slices/turfs';
const reducer = {
  turfs: turfReducer
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;