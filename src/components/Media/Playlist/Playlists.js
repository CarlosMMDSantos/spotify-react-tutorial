import React from 'react'
import { connect } from 'react-redux'
import { Box, Typography } from '@material-ui/core'
import CardContainer from './../Shared/CardContainer'
import { getUserPlaylists } from './../../../store/User/actions'

class Playlists extends React.Component {
    
    componentDidMount () {
        this.props.getUserPlaylists()
    }

    render() {
        return (
            <Box>
                <Typography variant="h4" gutterBottom>
                    My Playlists
                </Typography>
                <CardContainer items={this.props.myPlaylists}/>
            </Box>
        )
    }
}

const mapStateToProps = state => ({
    myPlaylists: state.userReducer.playlists
})

const mapDispatchToProps = {
    getUserPlaylists: getUserPlaylists
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlists)