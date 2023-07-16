import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import { selectUser } from 'redux/selectors';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { StyledLink, StyledUserMenuContainer } from './StyledUserMenu';

export default function UserMenu() {
  const { name } = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <StyledUserMenuContainer>
      <StyledLink to="/contacts">PhoneBook</StyledLink>
      <div>
        <p>{name.toUpperCase()}</p>
        <IconButton
          variant="contained"
          style={{
            backgroundColor: 'white',
            color: 'black',
          }}
          size="small"
          onClick={handleLogOut}
        >
          <RiLogoutBoxRLine />
        </IconButton>
      </div>
    </StyledUserMenuContainer>
  );
}
