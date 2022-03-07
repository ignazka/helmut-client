import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100vw', position: 'fixed', bottom: '0' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label='Contact' icon={<RestoreIcon />} />
        <BottomNavigationAction label='Work' icon={<FavoriteIcon />} />
        <BottomNavigationAction label='Bio' icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}