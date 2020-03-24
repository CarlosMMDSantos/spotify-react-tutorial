import request from './../../api/spotifyFetch'
import { map } from 'lodash'

export const BEGIN_USER_REQUEST = 'BEGIN_USER_REQUEST'
export const SET_USER = 'SET_USER'
export const SET_RECENTLY_PLAYED = 'SET_RECENTLY_PLAYED'
export const SET_TOP_TRACKS = 'SET_TOP_TRACKS'
export const SET_TOP_ARTISTS = 'SET_TOP_ARTISTS'
export const SET_PLAYLISTS = 'SET_PLAYLISTS'
export const SET_USER_DASHBOARD_DATA = 'SET_USER_DASHBOARD_DATA'
export const SUCCESS_USER_REQUEST = 'SUCCESS_USER_REQUEST'
export const FAIL_USER_REQUEST = 'FAIL_USER_REQUEST'

export const beginUserRequest = () => ({
    type: BEGIN_USER_REQUEST
})

export const setUser = data => ({
    type: SET_USER,
    data: data
})

export const setUserDashboardData = data => ({
    type: SET_USER_DASHBOARD_DATA,
    data: data
})

export const setPlaylists = data => ({
    type: SET_PLAYLISTS,
    data: data
})

export function getUser () {
    return async (dispatch, getState) => {
        let user = await request.get('/me', null, getState().authReducer.accessToken)
        dispatch(setUser(user))
    }
}

export function getDashboardData () {
    return async (dispatch, getState) => {
        let data = await Promise.all([
            request.get('/me/player/recently-played', null, getState().authReducer.accessToken),
            request.get('/me/top/tracks', null, getState().authReducer.accessToken),
            request.get('/me/top/artists', null, getState().authReducer.accessToken)
        ])

        dispatch(setUserDashboardData({
            recentlyPlayedTracks: prepareRecentlyPlayed(data[0].items),
            topTracks: prepareTracks(data[1].items),
            topArtists: prepareArtists(data[2].items),
        }))
    }
}

export function getUserPlaylists () {
    return async (dispatch, getState) => {
        let playlists = await request.get('/me/playlists', null, getState().authReducer.accessToken)

        dispatch(setPlaylists(preparePlaylists(playlists.items)))
    }
}

function prepareRecentlyPlayed (tracks) {
    return prepareTracks(map(tracks, 'track'))
}

function prepareTracks (tracks) {
    return map(tracks, (track => {
        return {
            id: track.id,
            name: track.name,
            image: track.album.images.length > 0 ? track.album.images[0].url : '',
            type: 'track',
            description: track.artists[0].name + ' - ' + track.album.name
        }
    }))
}

function prepareArtists (artists) {
    return map(artists, (artist) => {
        return {
            id: artist.id,
            name: artist.name,
            image: artist.images.length > 0 ? artist.images[0].url : 0,
            type: 'artist',
            description: ''
        }
    })
}

function preparePlaylists (playlists) {
    return playlists.map(playlist => {
        return {
            id: playlist.id,
            name: playlist.name,
            image: playlist.images.length > 0 ? playlist.images[0].url : '',
            type: 'playlists'
        }
    })
}