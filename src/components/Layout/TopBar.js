import React from 'react'
import { withRouter } from 'react-router'

import {AppBar, Toolbar, Grid, TextField, IconButton} from '@material-ui/core'
import { Search, ArrowBackIos } from '@material-ui/icons'

class TopBar extends React.Component {

    goBack = () => {
        this.props.history.goBack();
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
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="With a grid" />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withRouter(TopBar)