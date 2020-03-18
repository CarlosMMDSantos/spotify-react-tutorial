import React from 'react'
import {withRouter} from 'react-router'
import {Layout, Dropdown, Button} from 'element-react'
import auth from './../Auth/Auth'

class TopBar extends React.Component {

    goBack = () => {
        this.props.history.goBack();
    }

    render () {
        return (
            <Layout.Row>
                <Button className="left" icon="arrow-left" onClick={this.goBack}>Back</Button>
                <Dropdown className="user-dropdown right" trigger="click" menu={(
                    <Dropdown.Menu>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                )}>
                    <div className="full-width" style={{display: 'flex', alignItems: 'center'}}>
                        <div className="left">
                            {auth.profile.display_name}
                        </div>
                        <div className="right">
                            <img src={auth.profile.images[0].url} style={{height: "2rem", borderRadius: "100%"}}/>
                        </div>
                    </div>
              </Dropdown>
            </Layout.Row>
        )
    }
}

export default withRouter(TopBar)