import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getTrack, resetTrack } from './../../../store/Tracks/actions'

import { Grid } from '@material-ui/core'
import MediaHeader from './../Shared/MediaHeader'

class Track extends React.Component {

    componentDidMount () {
        this.props.getTrack(this.props.match.params.id)
    }

    componentWillUnmount () {
        this.props.resetTrack()
    }

    render () {
        return (
            <Grid container>
                { this.props.loading && 
                    <Grid item xs={12}>
                        <span>Loading...</span>
                    </Grid>
                }

                { !this.props.loading &&
                    <Grid item xs={12}>
                        <MediaHeader data={{name: this.props.name, image: this.props.album.image, type: this.props.type, artists: this.props.artists, album: this.props.album}}/>
                    </Grid> 
                }
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    name: state.trackReducer.name,
    type: state.trackReducer.type,
    album: state.trackReducer.album,
    type: state.trackReducer.type,
    artists: state.trackReducer.artists,
    loading: state.trackReducer.loading
})

const mapDispatchToProps = {
    getTrack: getTrack,
    resetTrack: resetTrack
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Track)