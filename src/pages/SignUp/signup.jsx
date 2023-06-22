import React from 'react';
import { Typography } from '@mui/material';
import backgroundImage from '../../assets/SignupImg.svg';
import CardComponent from '../../components/Card/CardComponent';
import TextFieldComponent from '../../components/Text Field/TextFieldComponent';
import PasswordTextFieldComponent from '../../components/Text Field/PasswordTextField';
import ButtonComponent from '../../components/Button/ButtonComponent';

const SignupPage = () => {
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

  const handleSignup = () => {
    // Handle signup logic here
  };

  return (
    <div style={styles.root}>
      <CardComponent>
        <Typography variant="h5" component="h2" align="center" color="white">
          Sign Up
        </Typography>
        <TextFieldComponent label="Name" variant="outlined" name="name" />
        <TextFieldComponent label="Email" variant="outlined" name="email" />
        <PasswordTextFieldComponent label="Password" variant="outlined" name="password" />
        <ButtonComponent onClick={handleSignup}>Sign Up</ButtonComponent>
      </CardComponent>
    </div>
  );
};

export default SignupPage;
