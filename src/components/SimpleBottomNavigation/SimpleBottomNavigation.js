import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import { Event } from '@mui/icons-material';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigateTo = useNavigate();
  return (
    <Box
      sx={{
        width: '100vw',
        position: 'fixed',
        bottom: '0',
      }}
    >
      <BottomNavigation
        showLabels
        sx={{ borderTop: 'black solid 1px' }}
        value={value}
        onChange={(event, newValue) => {
          switch (event.target.innerText) {
            case 'contact':
              window.location = 'mailto:xyz@yourapplicationdomain.com';
              break;
            case 'work':
              navigateTo('/');
              console.log('switch work');
              break;
            case 'vita':
              navigateTo('/vita');
              console.log('switch vita');

              break;
            default:
          }
          setValue(newValue);
        }}
        color='red'
      >
        <BottomNavigationAction
          className='bottom-navigation-logo'
          disabled
          label='Helmut Mark'
        />
        <BottomNavigationAction label='contact' />
        <BottomNavigationAction label='work' />
        <BottomNavigationAction label='vita' />
      </BottomNavigation>
    </Box>
  );
}
