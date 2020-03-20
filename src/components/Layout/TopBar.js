import React from 'react'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'

import {AppBar, Toolbar, Grid, TextField, IconButton} from '@material-ui/core'
import { Search, ArrowBackIos } from '@material-ui/icons'

class TopBar extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            query: ''
        }
    }

    goBack = () => {
        this.props.history.goBack();
    }

    goToSearch = () => {
        this.props.history.push('/search')
    }

    extractValueToSearch = (e) => {
        this.setState({
            query: e.target.value
        })

        this.props.search(e.target.value)
    }

    render () {
        return (
            <AppBar position="static" color="transparent" elevation={0} >
                <Toolbar variant="dense">
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <IconButton onClick={this.goBack}>
                                <ArrowBackIos/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Search />
                        </Grid>
                        <Grid item onClick={this.goToSearch}>
                            <TextField id="input-with-icon-grid" label="Search" value={this.state.query} onChange={this.extractValueToSearch}/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withRouter(TopBar)