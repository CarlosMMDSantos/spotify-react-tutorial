import React from 'react'
import { Switch, Route} from 'react-router-dom';

import { Container, Grid } from '@material-ui/core'
import TopBar from './Layout/TopBar'
import SideBar from './Layout/SideBar'
import Dashboard from './Dashboard/Dashboard'
import Track from './Media/Track/Track'
import Artist from './Media/Artist/Artist'
import Album from './Media/Album/Album'
import Playlist from './Media/Playlist/Playlist'


class Home extends React.Component {
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
                                    <Route exact path="/" component={Home}>
                                        <Dashboard/>
                                    </Route>
                                    <Route path='/track/:id' component={Home}>
                                        <Track/>
                                    </Route>
                                    <Route path='/artist/:id' component={Home}>
                                        <Artist/>
                                    </Route>
                                    <Route path='/album/:id' component={Home}>
                                        <Album/>
                                    </Route>
                                    <Route path="/playlist/:id">
                                        <Playlist/>
                                    </Route>
                                </Switch>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Home