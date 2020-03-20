import React from 'react'
import { withRouter } from 'react-router'
import { Layout } from 'element-react'
import MediaHeader from './../Shared/MediaHeader'
import MediaList from './../Shared/MediaList'
import request from './../../../api/spotifyFetch'

class Playlist extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            name: '',
            image: '',
            type: null,
            tracks: {
                items: [],
                total: null
            }
        }

        this.getPlaylist()
    }

    getPlaylist = () => {
        request.get('/playlists/' + this.props.match.params.id).then(response => {
            this.preparePlaylist(response)
        })
    }

    preparePlaylist = (playlist) => {
        this.setState({
            name: playlist.name,
            image: playlist.images[0].url,
            description: playlist.description,
            type: playlist.type,
            tracks: {
                total: playlist.tracks.total,
                items: playlist.tracks.items.map(item => {
                    return {
                        id: item.track.id,
                        name: item.track.name,
                        artists: item.track.artists.map(artist => {
                            return {
                                id: artist.url,
                                name: artist.name
                            }
                        }),
                        duration: item.track.duration_ms
                    }
                })
            }
        })
    }

    showMore = () => {
        request.get('/playlists/' + this.props.match.params.id + '/tracks?offset=' + this.state.tracks.items.length + '&limit=100').then(response => {
            this.setState({
                tracks: {
                    total: response.total,
                    items: this.state.tracks.items.concat(response.items.map(item => {
                        return {
                            id: item.track.id,
                            name: item.track.name,
                            artists: item.track.artists.map(artist => {
                                return {
                                    id: artist.url,
                                    name: artist.name
                                }
                            }),
                            duration: item.track.duration_ms
                        }
                    }))
                }
            })
        })
    }

    render () {
        return (
            <Layout.Row>
                <Layout.Row>
                    <MediaHeader data={{name: this.state.name, image: this.state.image, type: this.state.type, description: this.state.description}}/>
                </Layout.Row>
                <Layout.Row>
                    <h3>Tracks</h3>
                    <MediaList tracks={this.state.tracks} showMore={this.showMore}/>
                </Layout.Row>
            </Layout.Row>
        )
    }

}

export default withRouter(Playlist)