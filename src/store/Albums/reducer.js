import { SET_ALBUM, RESET_ALBUM } from './actions'

const initialState = {
    name: '',
    image: '',
    type: 'album',
    artists: [],
    tracks: {
        total: null,
        items: []
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ALBUM:
            return {
                ...state,
                name: action.data.album.name,
                image: action.data.album.image,
                artists: action.data.album.artists,
                tracks: action.data.tracks
            }
        case RESET_ALBUM:
            return initialState
        default:
            return state
    }
}