import React from 'react'
import { Link } from 'react-router-dom'

class MediaHeaderData extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="media-data-container">
                <div className="Media-Type">
                    <h5>{this.props.type}</h5>
                </div>
                <div className="Media-Name">
                    <h1>{this.props.name}</h1>
                </div>
                { this.props.type && this.props.type !== 'artist' && this.props.type !== 'playlist' &&
                    <div className="Media-Artists">
                        <h5>
                            By {this.props.artists.map(artist => {
                                    return <Link key={artist.id} to={'/artist/' + artist.id}>{artist.name}</Link>
                            })}
                        </h5>
                    </div>
                }
                <div className="Media-Metadata">
                    { this.props.type === 'track' && this.props.album &&
                        <h5>Album: <Link to={'/album/' + this.props.album.id}>{this.props.album.name}</Link></h5>
                    }
                </div>
                <div className="Media-Actions"></div>
            </div>
        )
    }
}

export default MediaHeaderData