import { Button, Menu, MenuItem } from '@mui/material';
import { AuthNavContainer, StyledLink } from './StyldedAuthNav';
import { MdMenu } from 'react-icons/md';
import React, { useEffect, useState } from 'react';

export default function AuthNav() {
  const [screenWidth, setScreenWidth] = useState({ width: window.innerWidth });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  return screenWidth.width <= 480 ? (
    <AuthNavContainer>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MdMenu size={30} color="white" />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <StyledLink to="/login">Login</StyledLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <StyledLink to="/registration">Registration</StyledLink>
        </MenuItem>
      </Menu>
    </AuthNavContainer>
  ) : (
    <AuthNavContainer>
      <Button
        children={<StyledLink to="/login">Login</StyledLink>}
        variant="contained"
        style={{ backgroundColor: 'white', color: 'black', height: 35 }}
      />
      <Button
        children={<StyledLink to="/registration">Registration</StyledLink>}
        variant="contained"
        style={{ backgroundColor: 'white', color: 'black', height: 35 }}
      />
    </AuthNavContainer>
  );
}
