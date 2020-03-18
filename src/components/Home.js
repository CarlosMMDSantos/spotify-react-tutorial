import React from 'react'
import { Switch, Route} from 'react-router-dom';

import { Layout } from 'element-react'

import TopBar from './Layout/TopBar'
import Dashboard from './Dashboard/Dashboard'
import Track from './Media/Track/Track'
import Artist from './Media/Artist/Artist'
import Album from './Media/Album/Album'
import Playlist from './Media/Playlist/Playlist'


class Home extends React.Component {
    render () {

        return (
            <Layout.Row className="App full-width" type="flex" align="top">
                <Layout.Col className="App-container">
                    <Layout.Row className="topbar-container">
                        <TopBar/>
                    </Layout.Row>
                    <Layout.Row className="body-container">
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
                    </Layout.Row>
                </Layout.Col>
            </Layout.Row>
        )
    }
}

export default Home