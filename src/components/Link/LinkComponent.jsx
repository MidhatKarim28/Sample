import React from 'react';
import { Link, Typography } from '@mui/material';

const LinkComponent = ({ href, children }) => {
  return (
    <Typography variant="body2" align="center">
      <Link href={href} color="inherit">
        {children}
      </Link>
    </Typography>
  );
};

export default LinkComponent;
