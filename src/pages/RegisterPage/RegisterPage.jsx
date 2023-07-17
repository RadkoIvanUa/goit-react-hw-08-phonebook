import { Button, IconButton, TextField } from '@mui/material';
import { Container, FormContainer } from 'components/StyledContainer';
import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { register } from 'redux/operations';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const newUser = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(newUser));
    form.reset();
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <TextField
          size="small"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          type="text"
          required
        />
        <TextField
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          required
        />
        <TextField
          size="small"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          required
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
          Register
        </Button>
      </FormContainer>
      <ToastContainer />
    </Container>
  );
}
