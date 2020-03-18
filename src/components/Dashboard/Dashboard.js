import React from 'react'
import { map } from 'lodash'
import request from "../../api/spotifyFetch";

import { Collapse } from 'element-react'
import CardScroller from '../Media/Shared/MediaCardScroller'

class Dashboard extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            recentlyPlayed: [],
            topTracks: [],
            topArtists: [],
            myPlaylists: [],
            isLoading: true
        }

        this.getDashboardData()
    }

    getDashboardData = () => {
        Promise.all([
            request.get('/me/player/recently-played'),
            request.get('/me/top/tracks'),
            request.get('/me/top/artists'),
            request.get('/me/playlists')
        ]).then(data => {
            this.setState({
                recentlyPlayed: this.prepareRecentlyPlayed(data[0].items),
                topTracks: this.prepareTracks(data[1].items),
                topArtists: this.prepareArtists(data[2].items),
                myPlaylists: this.preparePlaylists(data[3].items),
                isLoading: false
            })
        })
    }

    prepareRecentlyPlayed = (tracks) => {
        return this.prepareTracks(map(tracks, 'track'))
    }

    prepareTracks = (tracks) => {
        return map(tracks, (track => {
            return {
                id: track.id,
                name: track.name,
                image: track.album.images[0].url,
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
                image: artist.images[0].url,
                type: 'artist',
                description: ''
            }
        })
    }

    preparePlaylists = (playlists) => {
        console.log(playlists)
        return playlists.map(playlist => {
            return {
                id: playlist.id,
                name: playlist.name,
                image: playlist.images[0].url,
                type: 'playlist'
            }
        })
    }

    render () {
        return (
            <Collapse className="card-collapse" value={['1', '2', '3', '4']}>
                <Collapse.Item title="Recently Played" name="1">
                    <CardScroller items={this.state.recentlyPlayed}/>
                </Collapse.Item>
                <Collapse.Item title="Top Tracks" name="2">
                    <CardScroller items={this.state.topTracks}/>
                </Collapse.Item>
                <Collapse.Item title="Top Artists" name="3">
                    <CardScroller items={this.state.topArtists}/>
                </Collapse.Item>
                <Collapse.Item title="My Playlists" name="4">
                    <CardScroller items={this.state.myPlaylists}/>
                </Collapse.Item>
                
            </Collapse>
        )
    }
}

export default Dashboard