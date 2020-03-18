import React from 'react'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import request from '../../../api/spotifyFetch'
import MediaList from '../Shared/MediaList'
import { Layout } from 'element-react'
import MediaHeader from './../Shared/MediaHeader'

class Album extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            name: '',
            image: '',
            type: null,
            artists: [],
            tracks: []
        }

        this.getAlbum()
    }

    getAlbum = () => {
        request.get('/albums/' + this.props.match.params.id).then(data => {
            this.prepareAlbum(data)
            this.prepareTracks(data.tracks.items)
        })
        
    }

    prepareAlbum = (album) => {
        this.setState({
            name: album.name,
            image: album.images[0].url,
            type: album.type,
            artists: album.artists.map(artist => {
                return { id: artist.id, name: artist.name }
            })
        })
    }

    prepareTracks = (tracks) => {
        this.setState({
            tracks: tracks.map(track => {
                return {
                    id: track.id,
                    name: track.name,
                    duration: track.duration_ms
                }
            })
        })
    }

    render () {
        return (
            <Layout.Row>
                <Layout.Row>
                    <MediaHeader data={{name: this.state.name, image: this.state.image, type: this.state.type, artists: this.state.artists}}/>
                </Layout.Row>
                <Layout.Row>
                    <h3>Tracks</h3>
                    <MediaList tracks={this.state.tracks}/>
                </Layout.Row>
            </Layout.Row>
        )
    }
}

export default withRouter(Album)