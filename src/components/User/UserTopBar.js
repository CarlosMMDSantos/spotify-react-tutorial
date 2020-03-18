import React from 'react'
import {Dropdown, Button} from 'element-react'
import auth from './../Auth/Auth'

class UserTopBar extends React.Component {
    render () {
        console.log(auth.profile.display_name)
        console.log(auth)
        return (
            <Dropdown className="user-dropdown" trigger="click" menu={(
                <Dropdown.Menu>
                  <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown.Menu>
              )}>
                <div className="full-width">
                    <div className="left">
                        {auth.profile.display_name}
                    </div>
                    <div className="right">
                        <img src={auth.profile.images[0].url} style={{height: "2rem", borderRadius: "100%"}}/>
                    </div>
                </div>
              </Dropdown>
        )
    }
}

export default UserTopBar