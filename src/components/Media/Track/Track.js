import React from 'react'
import { withRouter } from 'react-router'
import request from '../../../api/spotifyFetch'

import { Grid } from '@material-ui/core'
import MediaHeader from './../Shared/MediaHeader'

class Track extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            name: '',
            duration: 0,
            type: 'track',
            album: {},
            artists: [],
            loading: true
        }

        this.getTrackInfo()
    }

    getTrackInfo = () => {
        request.get('/tracks/' + this.props.match.params.id).then(response => {
            this.prepareTrack(response)
        })
    }

    prepareTrack = (track) => {
        this.setState({
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
        })
    }

    render () {
        return (
            <Grid container>
                { this.state.loading && 
                    <Grid item xs={12}>
                        <span>Loading...</span>
                    </Grid>
                }

                { !this.state.loading &&
                    <Grid item xs={12}>
                        <MediaHeader data={{name: this.state.name, image: this.state.album.image, type: this.state.type, artists: this.state.artists, album: this.state.album}}/>
                    </Grid> 
                }
            </Grid>
        )
    }
}

export default withRouter(Track)