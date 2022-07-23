import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

import { user } from './userReducer'

let composeEnhancers = compose

const u: any = user

const store = createStore(u, composeEnhancers(applyMiddleware(ReduxThunk)))

export default store