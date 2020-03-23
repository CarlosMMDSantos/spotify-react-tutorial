import { SET_ARTIST, RESET_ARTIST } from './actions'

const initialState = {
    artist: {},
    topTracks: [],
    albums: [],
    type: 'artist'
}

export default function artistReducer (state = initialState, action) {
    switch (action.type) {
        case SET_ARTIST:
            return {
                ...state,
                artist: action.data.artist,
                topTracks: action.data.topTracks,
                albums: action.data.albums
            }
        case RESET_ARTIST:
            return initialState
        default: 
            return state
    }
}