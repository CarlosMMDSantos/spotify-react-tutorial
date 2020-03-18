import React from 'react'
import { Layout, Card, Button } from 'element-react'
import auth from './Auth'

class Login extends React.Component {

    handleLogin() {
        auth.signIn()
    }

    render() {
        return (
            <Card className='card-login'>
                <Layout.Row>
                    <Layout.Row type="flex" justify="center">
                        <h1>Sign In</h1>
                    </Layout.Row>
                    <br/>
                    <Layout.Row type="flex" justify="center">
                        <img className="full-width" src="Spotify_Green.png"/>
                    </Layout.Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Layout.Row type="flex" justify="center">
                        <Button type="success" onClick={this.handleLogin}>
                            Login with Spotify
                        </Button>
                    </Layout.Row>
                </Layout.Row>
            </Card>
        )
    }
}

export default Login