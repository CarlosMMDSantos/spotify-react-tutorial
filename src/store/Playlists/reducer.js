import { SET_PLAYLIST, ADD_PLAYLIST_TRACKS, RESET_PLAYLIST } from './actions'

const initialState = {
    name: '',
    image: '',
    type: null,
    tracks: {
        items: [],
        total: null
    }
}

export default function playlistReducer (state = initialState, action) {
    switch (action.type) {
        case SET_PLAYLIST:
            return {
                ...state,
                name: action.data.name,
                image: action.data.image,
                tracks: action.data.tracks
            }
        case ADD_PLAYLIST_TRACKS:
            return {
                ...state,
                tracks: {
                    ...state.tracks,
                    items: state.tracks.items.concat(action.data.items)
                }
            }
        case RESET_PLAYLIST:
            return initialState
        default:
            return state
    }
}