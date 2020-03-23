import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem, ListItemAvatar, ListItemText, ListItemIcon, Divider, Avatar } from '@material-ui/core'
import { Dashboard, Star, ViewDay } from '@material-ui/icons'
import { connect } from 'react-redux'

class SideBar extends React.Component {

    render() {
        return (
            <List>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar src={this.props.user.image} />
                    </ListItemAvatar>
                    <ListItemText>
                        {this.props.user.name}
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <Dashboard />
                    </ListItemIcon>
                    <ListItemText>
                        <Link to="/">
                            Dashboard
                    </Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Star />
                    </ListItemIcon>
                    <ListItemText>
                        <Link to="/">
                            Favourites
                        </Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ViewDay />
                    </ListItemIcon>
                    <ListItemText>
                        <Link to="/playlists">
                            Playlists
                </Link>
                    </ListItemText>
                </ListItem>
            </List>
        )
    }
}

const mapStateToProps = state => {
    return {user: {
        name: state.userReducer.user.display_name,
        image: state.userReducer.user.images.length ? state.userReducer.user.images[0].url : ''
    }}
}

export default connect(mapStateToProps)(SideBar)