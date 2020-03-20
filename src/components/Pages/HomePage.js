import React from 'react'
import { Switch, Route} from 'react-router-dom'
import { map } from 'lodash'
import request from './../../api/spotifyFetch'

import { Container, Grid } from '@material-ui/core'
import TopBar from '../Layout/TopBar'
import SideBar from '../Layout/SideBar'
import Dashboard from '../Dashboard/Dashboard'
import Track from '../Media/Track/Track'
import Artist from '../Media/Artist/Artist'
import Album from '../Media/Album/Album'
import PlaylistsPage from './PlaylistsPage'
import SearchPage from './SearchPage'


class HomePage extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            tracks: [],
            albums: [],
            artists: [],
            playlists: []
        }
    }

    search = (query) => {
        request.get('/search', {
            q: query,
            type: 'album,artist,playlist,track',
            limit: 6
        }).then(data => {
            this.setState({
                tracks: this.prepareTracks(data.tracks.items),
                albums: this.prepareAlbums(data.albums.items),
                artists: this.prepareArtists(data.artists.items),
                playlists: this.preparePlaylists(data.playlists.items)
            })
        })
    }

    prepareTracks = (tracks) => {
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

    prepareArtists = (artists) => {
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

    prepareAlbums = (albums) => {
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

    preparePlaylists = (playlists) => {
        return playlists.map(playlist => {
            return {
                id: playlist.id,
                name: playlist.name,
                image: playlist.images.length > 0 ? playlist.images[0].url : '',
                type: 'playlists'
            }
        })
    }

    render () {
        return (
            <Grid container>
                <Grid item xs={4} md={2}>
                    <SideBar/>
                </Grid>
                <Grid item xs={8} md={10}>
                    <Grid container direction="column">
                        <Grid item xs={12}>
                            <TopBar search={this.search}/>
                            <br/>
                        </Grid>
                        <Grid item xs={12}>
                            <Container>
                                <Switch>
                                    <Route exact path="/" component={Dashboard}/>
                                    <Route path="/search" render={() => <SearchPage {...this.state}/>}/>
                                    <Route path='/track/:id' component={Track}/>
                                    <Route path='/artist/:id' component={Artist}/>
                                    <Route path='/album/:id' component={Album}/>
                                    <Route path="/playlists" component={PlaylistsPage}/>
                                </Switch>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default HomePage