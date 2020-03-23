import { combineReducers } from 'redux'
import authReducer from './Auth/reducer'
import userReducer from './User/reducer'
import trackReducer from './Tracks/reducer'
import artistReducer from './Artists/reducer'

export default combineReducers({
    authReducer,
    userReducer,
    trackReducer,
    artistReducer
})