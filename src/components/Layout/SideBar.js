import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem, ListItemAvatar, ListItemText, ListItemIcon, Divider, Avatar  } from '@material-ui/core'
import { Dashboard, Star, ViewDay } from '@material-ui/icons'
import auth from '../Auth/Auth'

class SideBar extends React.Component {

  render () {
    return (
      <List>
          <ListItem button>
              <ListItemAvatar>
                  <Avatar src={auth.profile.images[0].url}/>
              </ListItemAvatar>
              <ListItemText>
                  {auth.profile.display_name}
              </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem button>
              <ListItemIcon>
                  <Dashboard/>
              </ListItemIcon>
              <ListItemText>
                    <Link to="/">
                        Dashboard
                    </Link>
              </ListItemText>
          </ListItem>
          <ListItem button>
              <ListItemIcon>
                  <Star/>
              </ListItemIcon>
              <ListItemText>
                <Link to="/">
                    Favourites
                </Link>
              </ListItemText>
          </ListItem>
          <ListItem button>
              <ListItemIcon>
                  <ViewDay/>
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

export default SideBar