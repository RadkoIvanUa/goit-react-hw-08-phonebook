import { AppBar } from '@mui/material';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { StyledAppBar } from './StyledNavigation';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="fixed" style={StyledAppBar}>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
}
