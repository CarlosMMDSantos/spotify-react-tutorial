import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import {AppBar, Toolbar, Grid, TextField, IconButton} from '@material-ui/core'
import { Search, ArrowBackIos } from '@material-ui/icons'

import { search, resetSearchResults } from './../../store/Search/actions'

class TopBar extends React.Component {

    componentWillUnmount () {
        this.props.resetSearchResults()
    }

    goBack = () => {
        this.props.history.goBack();
    }

    goToSearch = () => {
        this.props.history.push('/search')
    }

    search = (e) => {
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
                            <TextField id="input-with-icon-grid" label="Search" onChange={this.search}/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

const mapDispatchToProps = {
    search: search,
    resetSearchResults: resetSearchResults
}

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(TopBar)