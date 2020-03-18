import React from 'react'
import { Link } from 'react-router-dom'

class MediaCard extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="media-card">
                <Link to={'/' + this.props.type + '/' + this.props.id}>
                    <img src={this.props.image}/>
                    <div className="media-data">
                        <div className="ellipsis">
                            <h4>{this.props.title}</h4>
                        </div>
                        
                        <div className="ellipsis-two-lines">
                            {this.props.description}
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default MediaCard