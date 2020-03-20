import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import request from '../../../api/spotifyFetch'

import { Layout, Loading } from 'element-react'
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
            <Layout.Row gutter={20}>
                { this.state.loading && 
                    <Loading/>
                }

                { !this.state.loading &&

                    <Layout.Row>
                        <Layout.Row>
                            <MediaHeader data={{name: this.state.name, image: this.state.album.image, type: this.state.type, artists: this.state.artists, album: this.state.album}}/>
                        </Layout.Row>
                    </Layout.Row>
                }
            </Layout.Row>
        )
    }
}

export default withRouter(Track)