import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

export default function CustomCard({  }) {
  return (
    <Card
      sx={{
        position: 'absolute',
        width: '312px',
        height: '251px',
        left: '564px',
        top: '1016px',
        background: '#FFFFFF',
        display: 'inline-block',
        mx: '2px',
        transform: 'scale(0.8)',
        opacity: 0.9,
        border: '10px',
      }}
    >
      <Box sx={{ position: 'absolute', top: 0, right: 0, m: 1, cursor: 'pointer' }}>
      </Box>
    </Card>
  );
}
