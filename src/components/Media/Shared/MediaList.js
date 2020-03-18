import React from 'react'
import { Link } from 'react-router-dom'

let moment = require('moment')
let momentDurationFormat = require('moment-duration-format')
momentDurationFormat(moment)

class MediaList extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <table>
                <tr>
                    <th>Name</th>
                    <th>Duration</th>
                </tr>
                {
                    this.props.tracks.map(track => {
                        return (<tr>
                            <td>
                                <Link to={'/track/' + track.id}>{track.name}</Link>
                            </td>
                            <td>
                                { moment.duration(track.duration, 'milliseconds').format('h:mm:ss') }
                            </td>
                        </tr>)
                    })
                }
            </table>
        )
    }
}

export default MediaList