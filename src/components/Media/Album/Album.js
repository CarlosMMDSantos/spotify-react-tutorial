import React from 'react'
import { withRouter } from 'react-router'
import request from '../../../api/spotifyFetch'
import MediaList from '../Shared/MediaList'
import { Grid } from '@material-ui/core'
import MediaHeader from './../Shared/MediaHeader'

class Album extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            image: '',
            type: null,
            artists: [],
            tracks: {
                total: null,
                items: []
            }
        }

        this.getAlbum()
    }

    getAlbum = () => {
        request.get('/albums/' + this.props.match.params.id).then(data => {
            console.log(data.tracks)
            this.prepareAlbum(data)
            this.prepareTracks(data.tracks)
        })

    }

    prepareAlbum = (album) => {
        this.setState({
            name: album.name,
            image: album.images.length > 0 ? album.images[0].url : '',
            type: album.type,
            artists: album.artists.map(artist => {
                return { id: artist.id, name: artist.name }
            })
        })
    }

    prepareTracks = (tracks) => {
        this.setState({
            tracks: {
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
        })
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <MediaHeader data={{ name: this.state.name, image: this.state.image, type: this.state.type, artists: this.state.artists }} />
                </Grid>
                <Grid item xs={12}>
                    <h3>Tracks</h3>
                    <MediaList tracks={this.state.tracks} />
                </Grid>
            </Grid>
        )
    }
}

export default withRouter(Album)