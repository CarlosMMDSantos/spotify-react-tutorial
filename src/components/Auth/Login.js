import React from 'react'
import { Grid, Card, CardContent, Button } from '@material-ui/core'
import auth from './Auth'

class Login extends React.Component {
    constructor (props) {
        super(props)
        //this.handleLogin()
    }

    handleLogin() {
        auth.signIn()
    }

    render() {
        return (
            <Grid className="full-height" alignContent="center" justify="center" container>
                <Card className='card-login' raised>
                    <CardContent>
                        <Grid container justify="center" alignItems="center" direction="column">
                            <Grid item xs={12}>
                                <h1>Sign In</h1>
                            </Grid>
                            <br/>
                            <Grid item xs={12}>
                                <img className="full-width" src="Spotify_Green.png"/>
                            </Grid>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" onClick={this.handleLogin}>
                                    Login with Spotify
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

export default Login