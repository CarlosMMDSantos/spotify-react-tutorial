import React from 'react'
import { Link } from 'react-router-dom'
import { Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@material-ui/core'

let moment = require('moment')
let momentDurationFormat = require('moment-duration-format')
momentDurationFormat(moment)

class MediaList extends React.Component {
    render () {
        return (
            <div>
                <TableContainer className="full-width">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Artist</TableCell>
                                <TableCell align="right">Duration</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.props.tracks.items.map(track => {
                                    return (
                                        <TableRow key={track.id}>
                                            <TableCell align="left">
                                                <Typography variant="body1" noWrap>
                                                    <Link to={'/track/' + track.id}>{track.name}</Link>
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Typography variant="body1" noWrap>
                                                    {
                                                        track.artists.map(artist => {                                                            
                                                            return <Link to={'/artist/' + artist.id}>{artist.name}</Link>
                                                        })
                                                    }
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="right">
                                                { moment.duration(track.duration, 'milliseconds').format('h:mm:ss') }
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                {
                    this.props.tracks.items.length < this.props.tracks.total &&
                    <Button onClick={this.props.showMore}>Show More</Button>
                }
            </div>
        )
    }
}

export default MediaList