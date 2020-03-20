import React from 'react'
import { map } from 'lodash'
import request from "../../api/spotifyFetch";

import { Container, Typography } from '@material-ui/core'
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
            request.get('/me/top/artists')
        ]).then(data => {
            this.setState({
                recentlyPlayed: this.prepareRecentlyPlayed(data[0].items),
                topTracks: this.prepareTracks(data[1].items),
                topArtists: this.prepareArtists(data[2].items),
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
                image: artist.images.length > 0 ? artist.images[0].url : 0,
                type: 'artist',
                description: ''
            }
        })
    }

    render () {
        return (
            <Container>
                <Typography variant="h4" gutterBottom>
                    Recently Played
                </Typography>
                <CardScroller items={this.state.recentlyPlayed}/>
                
                <Typography variant="h4" gutterBottom>
                    Top Tracks
                </Typography>
                <CardScroller items={this.state.topTracks}/>

                <Typography variant="h4" gutterBottom>
                    Top Artists
                </Typography>
                <CardScroller items={this.state.topArtists}/>
            </Container>
        )
    }
}

export default Dashboard