import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'element-react'

let moment = require('moment')
let momentDurationFormat = require('moment-duration-format')
momentDurationFormat(moment)

class MediaList extends React.Component {
    render () {
        console.log(this.props)
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.tracks.items.map(track => {
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
                    </tbody>
                </table>
                {
                    this.props.tracks.items.length < this.props.tracks.total &&
                    <Button onClick={this.props.showMore}>Show More</Button>
                }
                
            </div>
        )
    }
}

export default MediaList