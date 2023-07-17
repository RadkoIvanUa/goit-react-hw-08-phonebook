import { AppBar } from '@mui/material';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { StyledAppBar } from './StyledNavigation';
import { RiBook3Line } from 'react-icons/ri';
import { StyledLink } from 'components/UserMenu/StyledUserMenu';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="fixed" style={StyledAppBar}>
      <StyledLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <RiBook3Line size={50} color="white" />
        <p>PhoneBook</p>
      </StyledLink>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
}
