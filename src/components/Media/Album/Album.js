import React from 'react'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { connect } from 'react-redux'
import MediaList from '../Shared/MediaList'
import { Grid } from '@material-ui/core'
import MediaHeader from './../Shared/MediaHeader'
import { getAlbum, resetAlbum } from './../../../store/Albums/actions'

class Album extends React.Component {
    componentDidMount () {
        this.props.getAlbum(this.props.match.params.id)
    }

    componentWillUnmount () {
        this.props.resetAlbum()
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <MediaHeader data={{ name: this.props.name, image: this.props.image, type: this.props.type, artists: this.props.artists }} />
                </Grid>
                <Grid item xs={12}>
                    <h3>Tracks</h3>
                    <MediaList tracks={this.props.tracks} />
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    ...state.albumReducer
})

const mapDispatchToProps = {
    getAlbum: getAlbum,
    resetAlbum: resetAlbum
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Album)