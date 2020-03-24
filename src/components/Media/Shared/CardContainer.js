import React from 'react'
import { Grid } from '@material-ui/core'
import MediaCard from './../Shared/MediaCard' 

class CardContainer extends React.Component {
    render () {
        return (
            <Grid container alignItems="flex-start" justify="flex-start" spacing={2}>
                {
                    this.props.items.map(item => {
                        return (
                            <Grid item key={item.id}>
                                <MediaCard id={item.id} image={item.image} title={item.name} description={item.description} type={item.type}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        )
    }
}

export default CardContainer