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
                                id: artist.url,
                                name: artist.name
                            }
                        }),
                        duration: track.duration_ms
                    }
                })
            }
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