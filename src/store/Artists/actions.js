import request from './../../api/spotifyFetch'

export const SET_ARTIST = 'GET_ARTIST'
export const RESET_ARTIST = 'RESET_ARTIST'

export const setArtist = data => ({
    type: SET_ARTIST,
    data: data
})

export const resetArtist = () => ({
    type: RESET_ARTIST
})

export function getArtist (id) {
    return async (dispatch, getState) => {

        let data = await Promise.all(
            [
                request.get('/artists/' + id, null, getState().authReducer.accessToken),
                request.get('/artists/' + id + '/top-tracks?country=PT', null, getState().authReducer.accessToken),
                request.get('/artists/' + id + '/albums', null, getState().authReducer.accessToken)
            ]
        )

        dispatch(setArtist({
            artist: prepareArtist(data[0]),
            topTracks: prepareTracks(data[1].tracks),
            albums: prepareAlbums(data[2].items)
        }))
    }
}

function prepareArtist (artist) {
    return {
        name: artist.name,
        image: artist.images.length > 0 ? artist.images[0].url : '',
        type: 'artist'
    }
}

function prepareTracks (tracks) {
    return tracks.map(track => {
        return {
            id: track.id,
            name: track.name,
            duration: track.duration_ms,
            image: track.album.images.length > 0 ? track.album.images[0].url : '',
            type: 'track'
        }
    })
}

function prepareAlbums (albums) {
    return albums.map(album => {
        return {
            id: album.id,
            name: album.name,
            image: album.images.length > 0 ? album.images[0].url : '',
            releaseDate: album.release_date,
            type: 'album',
        }
    })
}