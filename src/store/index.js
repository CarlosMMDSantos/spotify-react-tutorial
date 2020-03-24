import { combineReducers } from 'redux'
import authReducer from './Auth/reducer'
import userReducer from './User/reducer'
import trackReducer from './Tracks/reducer'
import artistReducer from './Artists/reducer'
import albumReducer from './Albums/reducer'
import playlistReducer from './Playlists/reducer'
import searchReducer from './Search/reducer'

export default combineReducers({
    authReducer,
    userReducer,
    trackReducer,
    artistReducer,
    albumReducer,
    playlistReducer,
    searchReducer
})