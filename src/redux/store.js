import {createStore} from 'redux'
import friendsReducers from './reducers'

const store = createStore(friendsReducers)
export default store
