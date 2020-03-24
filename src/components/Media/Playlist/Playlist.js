import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Grid } from '@material-ui/core'
import MediaHeader from './../Shared/MediaHeader'
import MediaList from './../Shared/MediaList'
import { getPlaylist, getPlaylistTracks, resetPlaylist } from './../../../store/Playlists/actions'

class Playlist extends React.Component {
    
    componentDidMount () {
        this.props.getPlaylist(this.props.match.params.id)
    }

    componentWillUnmount () {
        this.props.resetPlaylist()
    }

    showMore = () => {
        this.props.getPlaylistTracks(this.props.match.params.id, this.props.tracks.items.length)
    }

    render () {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <MediaHeader data={{name: this.props.name, image: this.props.image, type: this.props.type, description: this.props.description}}/>
                </Grid>
                <Grid item xs={12}>
                    <h3>Tracks</h3>
                    <MediaList tracks={this.props.tracks} showMore={this.showMore}/>
                </Grid>
            </Grid>
        )
    }

}

const mapStateToProps = state => ({
    ...state.playlistReducer
})

const mapDispatchToProps = {
    getPlaylist: getPlaylist,
    getPlaylistTracks: getPlaylistTracks,
    resetPlaylist: resetPlaylist
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Playlist)