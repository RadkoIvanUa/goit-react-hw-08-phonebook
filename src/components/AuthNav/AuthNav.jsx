import { Button } from '@mui/material';
import { AuthNavContainer, StyledLink } from './StyldedAuthNav';

export default function AuthNav() {
  return (
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
