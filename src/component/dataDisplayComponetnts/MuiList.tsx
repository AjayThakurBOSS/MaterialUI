// How to display data as list

import React from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  ListItemAvatar,
  ListItemButton,
  //   for Dividing
  Divider,
} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

const MuiList = () => {
  return (
    <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
      <List>
        <ListItem>
          <ListItemText primary="List Item 1" />
          <Divider />
          <ListItemText primary="List Item 2" />
          {/* <Divider />  divider here is not working */}
          <ListItemText primary="List Item 3" />
        </ListItem>
        <Divider />
        {/* We can make list item a clickable button by wrapping it into ListItemButtom */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List Item 1" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          {/* We can add secondary text as below */}
          <ListItemText primary="List Item 2" secondary="Secondary text" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List Item 3" />
        </ListItem>
      </List>
    </Box>
  )
}

export default MuiList
