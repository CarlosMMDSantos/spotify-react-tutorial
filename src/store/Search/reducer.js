import { SET_SEARCH_RESULTS, RESET_SEARCH_RESULTS } from './actions'

const initialState = {
    tracks: [],
    albums: [],
    artists: [],
    playlists: []
}

export default function searchReducer (state = initialState, action) {
    switch (action.type) {
        case SET_SEARCH_RESULTS:
            return {
                tracks: action.data.tracks,
                albums: action.data.albums,
                artists: action.data.artists,
                playlists: action.data.playlists
            }
        case RESET_SEARCH_RESULTS:
            return initialState
        default:
            return state
    }
}
