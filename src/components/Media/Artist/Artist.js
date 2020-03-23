import React from 'react'
import {withRouter} from 'react-router'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getArtist, resetArtist } from './../../../store/Artists/actions'

import { Grid } from '@material-ui/core'
import CardScroller from '../Shared/MediaCardScroller'
import MediaHeader from './../Shared/MediaHeader'

class Artist extends React.Component {

    componentDidMount () {
        this.props.getArtist(this.props.match.params.id)
    }

    componentWillUnmount () {
        this.props.resetArtist()
    }

    render () {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <MediaHeader data={{name: this.props.name, image: this.props.image, type: this.props.type}}/>
                </Grid>
                <Grid item xs={12}>
                    <h3>Top tracks</h3>
                    <CardScroller items={this.props.topTracks}/>
                </Grid>
                <Grid item xs={12}>
                    <h3>Albums</h3>
                    <CardScroller items={this.props.albums}/>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    name: state.artistReducer.artist.name,
    image: state.artistReducer.artist.image,
    type: state.artistReducer.type,
    topTracks: state.artistReducer.topTracks,
    albums: state.artistReducer.albums
})

const mapDispatchToProps = {
    getArtist: getArtist,
    resetArtist: resetArtist
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Artist)