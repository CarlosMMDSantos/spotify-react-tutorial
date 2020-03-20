import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import CardContainer from './../Media/Shared/CardContainer'

class SearchPage extends React.Component {
    render () {
        return (
            <Grid container>
                { this.props.tracks.length > 0 &&
                    <Grid item xs={6}>
                        <Typography variant="h4">
                            Tracks
                        </Typography>
                        <CardContainer items={this.props.tracks}/>
                    </Grid>
                }
                { this.props.albums.length > 0 &&
                    <Grid item xs={6}>
                        <Typography variant="h4">
                            Albums
                        </Typography>
                        <CardContainer items={this.props.albums}/>
                    </Grid>
                }
                { this.props.artists.length > 0 &&
                    <Grid item xs={6}>
                        <Typography variant="h4">
                            Artists
                        </Typography>
                        <CardContainer items={this.props.artists}/>
                    </Grid>
                }
                { this.props.playlists.length > 0 &&
                    <Grid item xs={6}>
                        <Typography variant="h4">
                            Playlists
                        </Typography>
                        <CardContainer items={this.props.playlists}/>
                    </Grid>
                }
            </Grid>
        )
    }    
}

export default SearchPage