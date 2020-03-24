import request from '../../api/spotifyFetch'

export const SET_ALBUM = 'SET_ALBUM'
export const RESET_ALBUM = 'RESET_ALBUM'

export const setAlbum = data => ({
    type: SET_ALBUM,
    data: data
})

export const resetAlbum = data => ({
    type: RESET_ALBUM
})

export function getAlbum(id) {
    return async (dispatch, getState) => {
        let album = await request.get('/albums/' + id, null, getState().authReducer.accessToken)
        dispatch(setAlbum({
            album: prepareAlbum(album),
            tracks: prepareTracks(album.tracks)
        }))
    }
}

function prepareAlbum(album) {
    return {
        name: album.name,
        image: album.images.length > 0 ? album.images[0].url : '',
        type: album.type,
        artists: album.artists.map(artist => {
            return { id: artist.id, name: artist.name }
        })
    }
}

function prepareTracks(tracks) {
    return {
        total: tracks.total,
        items: tracks.items.map(track => {
            return {
                id: track.id,
                name: track.name,
                artists: track.artists.map(artist => {
                    return {
                        id: artist.id,
                        name: artist.name
                    }
                }),
                duration: track.duration_ms
            }
        })
    }
}