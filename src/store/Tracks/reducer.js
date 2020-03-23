import { BEGIN_TRACK_REQUEST, SET_CURRENT_TRACK, RESET_TRACK } from './actions'

const initialState = {
    name: null,
    duration: null,
    type: 'track',
    album: {},
    artists: [],
    loading: true
}

export default function trackReducer (state = initialState, action) {
    switch (action.type) {
        case BEGIN_TRACK_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SET_CURRENT_TRACK:
            return {
                ...state,
                name: action.data.name,
                duration: action.data.duration,
                album: action.data.album,
                artists: action.data.artists,
                loading: false
            }
        case RESET_TRACK:
            return initialState
        default: 
            return state
    }
}