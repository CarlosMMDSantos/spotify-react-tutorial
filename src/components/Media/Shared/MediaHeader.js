import React from 'react'
import MediaHeaderData from './MediaHeaderData'


class MediaHeader extends React.Component {
    render () {
        return (
            <div className="media-header-container">
                <div className="Media-Image">
                    <img className="full-width" src={this.props.data.image}/>
                </div>
                <div className="Media-Data">
                    <MediaHeaderData type={this.props.data.type} name={this.props.data.name} type={this.props.data.type} artists={this.props.data.artists} album={this.props.data.album}/>
                </div>
            </div>
        )
    }
}

export default MediaHeader