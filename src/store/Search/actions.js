import request from './../../api/spotifyFetch'
import { map } from 'lodash'

export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'
export const RESET_SEARCH_RESULTS = 'RESET_SEARCH_RESULTS'

export const setSearchResults = data => ({
    type: SET_SEARCH_RESULTS,
    data: data
})

export const resetSearchResults = () => ({
    type: RESET_SEARCH_RESULTS
})

export function search (query) {
    return async (dispatch, getStore) => {
        if (!query || query == '') {
            dispatch(resetSearchResults())
        } else {
            let results = await request.get('/search', {
                q: query,
                type: 'album,artist,playlist,track',
                limit: 6
            }, getStore().authReducer.accessToken)
            
            dispatch(setSearchResults({
                tracks: prepareTracks(results.tracks.items),
                albums: prepareAlbums(results.albums.items),
                artists: prepareArtists(results.artists.items),
                playlists: preparePlaylists(results.playlists.items)
            }))
        }
    }
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
            image: artist.images.length > 0 ? artist.images[0].url : '',
            type: 'artist',
            description: ''
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