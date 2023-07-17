import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import { selectUser } from 'redux/selectors';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { StyledUserMenuContainer } from './StyledUserMenu';
import { useEffect, useState } from 'react';

export default function UserMenu() {
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

  const { name } = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <StyledUserMenuContainer>
      <div>
        {screenWidth.width > 390 && (
          <p style={{ fontWeight: 700 }}>Welcome {name.toUpperCase()}!</p>
        )}

        <IconButton
          variant="contained"
          style={{
            backgroundColor: 'white',
            color: 'black',
          }}
          onClick={handleLogOut}
        >
          <RiLogoutBoxRLine />
        </IconButton>
      </div>
    </StyledUserMenuContainer>
  );
}
