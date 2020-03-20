import React from 'react'
import {withRouter} from 'react-router'
import request from '../../../api/spotifyFetch'

import { Grid } from '@material-ui/core'
import CardScroller from '../Shared/MediaCardScroller'
import MediaHeader from './../Shared/MediaHeader'

class Artist extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            name: '',
            image: null,
            type: null,
            topTracks: [],
            albums: []
        }

        this.getArtist()
    }

    getArtist = () => {
        Promise.all([
            request.get('/artists/' + this.props.match.params.id),
            request.get('/artists/' + this.props.match.params.id + '/top-tracks?country=PT'),
            request.get('/artists/' + this.props.match.params.id + '/albums')
        ]).then(data => {
            this.prepareArtist(data[0])
            this.prepareTracks(data[1].tracks)
            this.prepareAlbums(data[2].items)
        })
        
    }

    prepareArtist = (artist) => {
        this.setState({
            name: artist.name,
            image: artist.images.length > 0 ? artist.images[0].url : '',
            type: 'artist'
        })
    }

    prepareTracks = (tracks) => {
        this.setState({
            topTracks: tracks.map(track => {
                return {
                    id: track.id,
                    name: track.name,
                    duration: track.duration_ms,
                    image: track.album.images.length > 0 ? track.album.images[0].url : '',
                    type: 'track'
                }
            })
        })
    }

    prepareAlbums = (albums) => {
        this.setState({
            albums: albums.map(album => {
                return {
                    id: album.id,
                    name: album.name,
                    image: album.images.length > 0 ? album.images[0].url : '',
                    releaseDate: album.release_date,
                    type: 'album',
                }
            })
        })
    }

    render () {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <MediaHeader data={{name: this.state.name, image: this.state.image, type: this.state.type}}/>
                </Grid>
                <Grid item xs={12}>
                    <h3>Top tracks</h3>
                    <CardScroller items={this.state.topTracks}/>
                </Grid>
                <Grid item xs={12}>
                    <h3>Albums</h3>
                    <CardScroller items={this.state.albums}/>
                </Grid>
            </Grid>
        )
    }
}

export default withRouter(Artist)