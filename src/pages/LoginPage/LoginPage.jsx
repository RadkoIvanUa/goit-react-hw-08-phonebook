import { Button, IconButton, TextField } from '@mui/material';
import { Container, FormContainer } from 'components/StyledContainer';
import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { logIn } from 'redux/operations';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const user = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(logIn(user));
    form.reset();
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <TextField
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          type="email"
        />

        <TextField
          size="small"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </IconButton>
            ),
          }}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </FormContainer>
      <ToastContainer />
    </Container>
  );
}
