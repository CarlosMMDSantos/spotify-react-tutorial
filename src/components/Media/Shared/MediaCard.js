import React from 'react'
import { Link } from 'react-router-dom'

import { Box, Card, CardMedia, Typography } from '@material-ui/core'

class MediaCard extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <Box className="media-card" width="8em" height="12em">
                <Card>
                    <CardMedia className="media-card-image" image={this.props.image}/>
                </Card>
                <Link to={'/' + this.props.type + '/' + this.props.id}>
                    <Typography variant="h6" component="h2" noWrap>
                        {this.props.title}
                    </Typography>
                    <Typography variant="body2" component="p" noWrap>
                        {this.props.description}
                    </Typography>
                </Link>
            </Box>
        )
    }
}

export default MediaCard