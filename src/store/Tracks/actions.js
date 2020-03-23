import request from './../../api/spotifyFetch'

export const BEGIN_TRACK_REQUEST = 'BEGIN_TRACK_REQUEST'
export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK'
export const RESET_TRACK = 'RESET_TRACK'

export const beginTrackRequest = () => ({
    type: BEGIN_TRACK_REQUEST
})

export const setCurrentTrack = data => ({
    type: SET_CURRENT_TRACK,
    data: data
})

export const resetTrack = () => ({
    type: RESET_TRACK
})

export function getTrack (id) {
    return async (dispatch, getState) => {
        let state = getState()

        if (!state.trackReducer.loading) {
            dispatch(beginTrackRequest())
        }

        let track = await request.get('/tracks/' + id, null, state.authReducer.accessToken)

        dispatch(setCurrentTrack(prepareTrack(track)))
    }
}

function prepareTrack (track) {
    return {
        name: track.name,
        duration: track.duration_ms,
        album: {
            id: track.album.id,
            name: track.album.name,
            image: track.album.images.length > 0 ? track.album.images[0].url: '',
            releaseDate: track.album.release_date,
            type: track.album.type
        },
        artists: track.artists.map(artist => {
            return {
                id: artist.id,
                name: artist.name
            }
        }),
        loading: false
    }
}