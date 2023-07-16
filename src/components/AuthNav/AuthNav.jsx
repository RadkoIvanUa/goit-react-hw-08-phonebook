import { Button } from '@mui/material';
import { AuthNavContainer, StyledLink } from './StyldedAuthNav';

import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';
import { useEffect, useState } from 'react';

export default function AuthNav() {
  const [screenWidth, setScreenWidth] = useState({ width: window.innerWidth });

  const detectedSize = () => {
    setScreenWidth({
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectedSize);
    return () => {
      window.removeEventListener('resize', detectedSize);
    };
  }, [screenWidth]);

  return screenWidth.width < 450 ? (
    <AuthNavContainer>
      <Menu>
        <MenuButton as={Button}>
          <MdMenu size={30} color="white" />
        </MenuButton>
        <MenuList>
          <MenuItem style={{ textAlign: 'center' }}>
            <StyledLink style={{ fontSize: 20 }} to="/login">
              Login
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink style={{ fontSize: 20 }} to="/registration">
              Registration
            </StyledLink>
          </MenuItem>
        </MenuList>
      </Menu>
    </AuthNavContainer>
  ) : (
    <AuthNavContainer>
      <Button
        children={<StyledLink to="/login">Login</StyledLink>}
        variant="contained"
        style={{ backgroundColor: 'white', color: 'black', height: 30 }}
      />
      <Button
        children={<StyledLink to="/registration">Registration</StyledLink>}
        variant="contained"
        style={{ backgroundColor: 'white', color: 'black', height: 30 }}
      />
    </AuthNavContainer>
  );
}
