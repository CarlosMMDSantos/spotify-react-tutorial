import React from 'react'
import MediaHeaderData from './MediaHeaderData'
import { Box, Grid, Card, CardMedia } from '@material-ui/core'


class MediaHeader extends React.Component {
    render () {
        return (
            <Grid container spacing={3}>
                <Grid item>
                    <Box minWidth="13em" width="13em" height="13em">
                        <Card className="full-width full-height">
                            <CardMedia className="media-header-image" image={this.props.data.image}/>
                        </Card>
                    </Box>
                </Grid>
                <Grid item>
                    <MediaHeaderData type={this.props.data.type} name={this.props.data.name} type={this.props.data.type} artists={this.props.data.artists} album={this.props.data.album} description={this.props.data.description}/>
                </Grid>
            </Grid>
        )
    }
}

export default MediaHeader