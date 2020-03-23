import { BEGIN_USER_REQUEST, SET_USER, SET_RECENTLY_PLAYED, SET_TOP_ARTISTS, SET_TOP_TRACKS, SET_USER_DASHBOARD_DATA } from './actions'

const initialState = {
    user: {},
    recentlyPlayedTracks: [],
    topTracks: [],
    topArtists: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case BEGIN_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SET_USER:
            return {
                ...state,
                user: action.data
            }
        case SET_RECENTLY_PLAYED:
            return {
                ...state,
                recentlyPlayedTracks: action.data
            }
        case SET_TOP_ARTISTS:
            return {
                ...state,
                topTracks: action.data
            }
        case SET_TOP_TRACKS:
            return {
                ...state,
                topArtists: action.data
            }
        case SET_USER_DASHBOARD_DATA:
            return {
                ...state,
                recentlyPlayedTracks: action.data.recentlyPlayedTracks,
                topTracks: action.data.topTracks,
                topArtists: action.data.topArtists
            }
        default:
            return state
    }
}