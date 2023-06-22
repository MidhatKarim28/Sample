import React from 'react';
import { Typography } from '@mui/material';
import backgroundImage from '../../assets/LoginImg.svg';
import CardComponent from '../../components/Card/CardComponent';
import TextFieldComponent from '../../components/Text Field/TextFieldComponent';
import PasswordTextFieldComponent from '../../components/Text Field/PasswordTextField';
import ButtonComponent from '../../components/Button/ButtonComponent';
import LinkComponent from '../../components/Link/LinkComponent';

const Login = () => {
  const styles = {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
    },
  };

  return (
    <div style={styles.root}>
      <CardComponent>
        <Typography variant="h5" component="h2" align="center" color="white">
          Login
        </Typography>
        <TextFieldComponent label="Username" variant="outlined" name="username" />
        <PasswordTextFieldComponent label="Password" variant="outlined" name="password" />
        <ButtonComponent>Login</ButtonComponent>
        <LinkComponent href="#">Forgot password?</LinkComponent>
      </CardComponent>
    </div>
  );
};

export default Login;
