import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Playlists from '../Media/Playlist/Playlists'
import Playlist from '../Media/Playlist/Playlist'

class PlaylistsPage extends React.Component {
    render () {
        return (
            <Switch>
                <Route exact path="/playlists" component={Playlists}/>
                <Route path="/playlists/:id" component={Playlist}/>
            </Switch>
        )
    }
}

export default PlaylistsPage