import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function BottomNavBar() {
  const [value, setValue] = React.useState(2);

  return (
    <Box sx={{ margin: "0px", width: "100%" }}>
      <BottomNavigation 
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction sx={{ fontFamily: 'montserrat', fontWeight: 700 }} label="BetWinner" icon='✅' href='/betwinner' />
        <BottomNavigationAction sx={{ fontFamily: 'montserrat', fontWeight: 700 }} label="1Win" icon='✅' href='/1win' />
        <BottomNavigationAction sx={{ fontFamily: 'montserrat', fontWeight: 700 }} label="1xBet" icon='⭐' href='/' />
        <BottomNavigationAction sx={{ fontFamily: 'montserrat', fontWeight: 700 }} label="LineBet" icon='✅' href='/linebet' />
        <BottomNavigationAction sx={{ fontFamily: 'montserrat', fontWeight: 700 }} label="MelBet" icon='✅' href='/melbet' />
      </BottomNavigation>
    </Box>
  );
}
