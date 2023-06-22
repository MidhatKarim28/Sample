import React from 'react';
import { Card, CardContent } from '@mui/material';

const CardComponent = ({ children }) => {
  const styles = {
    card: {
      width: '700px',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      opacity: 0.9,
      backgroundColor: '#3583FE',
      padding: 2,
    },
  };

  return (
    <Card sx={styles.card}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardComponent;
