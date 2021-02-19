import reducer from '../reducers/increment'
import { createStore } from 'redux'

const store=createStore(reducer)

export default store