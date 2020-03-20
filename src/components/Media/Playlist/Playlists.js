import React from 'react'
import request from './../../../api/spotifyFetch'
import { Box, Typography } from '@material-ui/core'
import CardContainer from './../Shared/CardContainer'

class Playlists extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            myPlaylists: []
        }

        this.getPlaylists()
    }

    getPlaylists = () => {
        request.get('/me/playlists').then(data => {
            this.setState({
                myPlaylists: this.preparePlaylists(data.items)
            })
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

    render() {
        return (
            <Box>
                <Typography variant="h4" gutterBottom>
                    My Playlists
                </Typography>
                <CardContainer items={this.state.myPlaylists}/>
            </Box>
        )
    }
}

export default Playlists