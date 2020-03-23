import React from 'react'
import MediaCard from './MediaCard'

class CardScroller extends React.Component {
    render () {
        return (
            <div className="card-scroller">
                {this.props.items.map(item => {
                    return <MediaCard key={item.id} id={item.id} image={item.image} title={item.name} description={item.description} type={item.type}/>
                })}
            </div>
        )
    }
}

export default CardScroller