import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'

class MediaHeaderData extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <Grid container direction="column">
                <Grid item>
                    <Typography variant="overline">
                        {this.props.type}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h3">
                        {this.props.name}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1">
                        <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
                    </Typography>
                </Grid>
                { this.props.type && this.props.type !== 'artist' && this.props.type !== 'playlist' &&
                        <Grid item>
                            <Typography variant="body1">
                                By {this.props.artists.map(artist => {
                                            return <Link key={artist.id} to={'/artist/' + artist.id}>{artist.name}</Link>
                                    })}
                            </Typography>
                        </Grid>
                }
                { this.props.type === 'track' && this.props.album &&
                        <Grid item>
                            <Typography variant="body1">
                                Album: <Link to={'/album/' + this.props.album.id}>{this.props.album.name}</Link>
                            </Typography>
                        </Grid>
                }
            </Grid>            
        )
    }
}

export default MediaHeaderData