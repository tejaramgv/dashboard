import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PostAddIcon from '@mui/icons-material/PostAdd';

const Sidebar = () => {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
    
        '& .MuiDrawer-paper': { width: 240, 
         
          background: 'linear-gradient(#f7f9fc,#044a4a )',
          boxSizing: 'border-box' },
      }}
    >
      <List>
        <ListItem
          button
          component={Link}
          to="/home"
          sx={{
            backgroundColor: location.pathname === '/home' ? '#e0f7fa' : 'transparent',
            '&:hover': {
              backgroundColor: '#b2dfdb',
            },
            borderRadius: 1,
          }}
        >
          <ListItemIcon>
            <HomeIcon sx={{ color: location.pathname === '/home' ? '#00796b' : 'inherit' }} />
          </ListItemIcon>
          <ListItemText
            primary="Home"
            sx={{
              visibility: 'visible',
              opacity: 1,
              transition: 'opacity 0.3s',
              '&:hover': {
                opacity: 1,
              },
            }}
          />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/users"
          sx={{
            backgroundColor: location.pathname === '/users' ? '#e0f7fa' : 'transparent',
            '&:hover': {
              backgroundColor: '#b2dfdb',
            },
            borderRadius: 1,
          }}
        >
          <ListItemIcon>
            <PeopleIcon sx={{ color: location.pathname === '/users' ? '#00796b' : 'inherit' }} />
          </ListItemIcon>
          <ListItemText
            primary="User Listing"
            sx={{
              visibility: 'visible',
              opacity: 1,
              transition: 'opacity 0.3s',
              '&:hover': {
                opacity: 1,
              },
            }}
          />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/posts"
          sx={{
            backgroundColor: location.pathname === '/posts' ? '#e0f7fa' : 'transparent',
            '&:hover': {
              backgroundColor: '#b2dfdb',
            },
            borderRadius: 1,
          }}
        >
          <ListItemIcon>
            <PostAddIcon sx={{ color: location.pathname === '/posts' ? '#00796b' : 'inherit' }} />
          </ListItemIcon>
          <ListItemText
            primary="Post Listing"
            sx={{
              visibility: 'visible',
              opacity: 1,
              transition: 'opacity 0.3s',
              '&:hover': {
                opacity: 1,
              },
            }}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
