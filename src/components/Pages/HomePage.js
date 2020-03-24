import React from 'react'
import { Switch, Route} from 'react-router-dom'

import { Container, Grid } from '@material-ui/core'
import TopBar from '../Layout/TopBar'
import SideBar from '../Layout/SideBar'
import Dashboard from '../Dashboard/Dashboard'
import Track from '../Media/Track/Track'
import Artist from '../Media/Artist/Artist'
import Album from '../Media/Album/Album'
import PlaylistsPage from './PlaylistsPage'
import SearchPage from './SearchPage'


class HomePage extends React.Component {

    render () {
        return (
            <Grid container>
                <Grid item xs={4} md={2}>
                    <SideBar/>
                </Grid>
                <Grid item xs={8} md={10}>
                    <Grid container direction="column">
                        <Grid item xs={12}>
                            <TopBar/>
                            <br/>
                        </Grid>
                        <Grid item xs={12}>
                            <Container>
                                <Switch>
                                    <Route exact path="/" component={Dashboard}/>
                                    <Route path="/search" component={SearchPage}/>}/>
                                    <Route path='/track/:id' component={Track}/>
                                    <Route path='/artist/:id' component={Artist}/>
                                    <Route path='/album/:id' component={Album}/>
                                    <Route path="/playlists" component={PlaylistsPage}/>
                                </Switch>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default HomePage