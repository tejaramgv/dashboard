
import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useNavigate } from 'react-router-dom';

const BottomBar = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/home');
    if (newValue === 1) navigate('/users');
    if (newValue === 2) navigate('/posts');
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      sx={{
        position: 'fixed',
        bottom: 0,
        background: 'linear-gradient(#044a4a,#f7f9fc )',
        left: 0,
        right: 0,
        width: '100%',
        backgroundColor: '#f5f5f5', 
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        sx={{
          color: value === 0 ? '#004d40' : 'inherit',
          '&.Mui-selected': {
            color: '#004d40',
          },
        }}
      />
      <BottomNavigationAction
        label="Users"
        icon={<PeopleIcon />}
        sx={{
          color: value === 1 ? '#004d40' : 'inherit', 
          '&.Mui-selected': {
            color: '#004d40', 
          },
        }}
      />
      <BottomNavigationAction
        label="Posts"
        icon={<PostAddIcon />}
        sx={{
          color: value === 2 ? '#004d40' : 'inherit', 
          '&.Mui-selected': {
            color: '#004d40',
          },
        }}
      />
    </BottomNavigation>
  );
};

export default BottomBar;
