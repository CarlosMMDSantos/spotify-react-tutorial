import React from 'react'
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
                  Dashboard
              </ListItemText>
          </ListItem>
          <ListItem button>
              <ListItemIcon>
                  <Star/>
              </ListItemIcon>
              <ListItemText>
                  Favourites
              </ListItemText>
          </ListItem>
          <ListItem button>
              <ListItemIcon>
                  <ViewDay/>
              </ListItemIcon>
              <ListItemText>
                  Playlists
              </ListItemText>
          </ListItem>
      </List>
    )
  }
}

export default SideBar