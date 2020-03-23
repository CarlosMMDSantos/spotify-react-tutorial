import React from 'react'
import { connect } from 'react-redux'

import { Container, Typography } from '@material-ui/core'
import CardScroller from '../Media/Shared/MediaCardScroller'
import { getDashboardData } from './../../store/User/actions'

class Dashboard extends React.Component {

    componentDidMount () {
        this.props.getDashboardData()
    }

    render () {
        return (
            <Container>
                <Typography variant="h4" gutterBottom>
                    Recently Played
                </Typography>
                <CardScroller items={this.props.recentlyPlayed}/>
                
                <Typography variant="h4" gutterBottom>
                    Top Tracks
                </Typography>
                <CardScroller items={this.props.topTracks}/>

                <Typography variant="h4" gutterBottom>
                    Top Artists
                </Typography>
                <CardScroller items={this.props.topArtists}/>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    recentlyPlayed: state.userReducer.recentlyPlayedTracks,
    topTracks: state.userReducer.topTracks,
    topArtists: state.userReducer.topArtists
})

const mapDispatchToProps = {
    getDashboardData: getDashboardData
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)