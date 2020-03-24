import request from './../../api/spotifyFetch'

export const SET_PLAYLIST = 'SET_PLAYLIST'
export const ADD_PLAYLIST_TRACKS = 'ADD_PLAYLIST_TRACKS'
export const RESET_PLAYLIST = 'RESET_PLAYLIST'

export const setPlaylist = data => ({
    type: SET_PLAYLIST,
    data: data
})

export const addTracks = data => ({
    type: ADD_PLAYLIST_TRACKS,
    data: data
})

export const resetPlaylist = () => ({
    type: RESET_PLAYLIST
})

export function getPlaylist (id) {
    return async (dispatch, getState) => {
        let playlist = await request.get('/playlists/' + id, null, getState().authReducer.accessToken)
        
        dispatch(setPlaylist({
            ...preparePlaylist(playlist),
            tracks: prepareTracks(playlist.tracks)
        }))
    }
}

export function getPlaylistTracks (id, offset = 0) {
    return async (dispatch, getState) => {
        let tracks = await request.get('/playlists/' + id + '/tracks?offset=' + offset + '&limit=100', null, getState().authReducer.accessToken)

        dispatch(addTracks(prepareTracks(tracks)))
    }
}

function preparePlaylist (playlist) {
    return {
        name: playlist.name,
        image: playlist.images.length > 0 ? playlist.images[0].url : '',
        description: playlist.description,
        type: playlist.type
    }
}

function prepareTracks (tracks) {
    return {
        total: tracks.total,
        items: tracks.items.map(item => {
            return {
                id: item.track.id,
                name: item.track.name,
                artists: item.track.artists.map(artist => {
                    return {
                        id: artist.url,
                        name: artist.name
                    }
                }),
                duration: item.track.duration_ms
            }
        })
    }
}