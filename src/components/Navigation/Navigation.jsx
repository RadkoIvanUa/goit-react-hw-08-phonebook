import { AppBar } from '@mui/material';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { StyledAppBar } from './StyledNavigation';
import { RiBook3Line } from 'react-icons/ri';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="fixed" style={StyledAppBar}>
      <div style={{ display: 'flex' }}>
        <RiBook3Line size={50} />
        <p>PhoneBook</p>
      </div>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
}
