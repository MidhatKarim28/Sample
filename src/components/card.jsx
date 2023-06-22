import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';

export default function CustomCard({ onClose }) {
  return (
    <Card
      sx={{
        display: 'inline-block',
        mx: '2px',
        transform: 'scale(0.8)',
        bgcolor: '#3583FE',
        opacity: 0.9,
        border: '10px',
        position: 'relative',
        width: '718px',
        height: '614px',
      }}
    >
      <Box sx={{ position: 'absolute', top: 0, right: 0, m: 1, cursor: 'pointer' }}>
        <CloseIcon onClick={onClose} sx={{ color: '#FFFFFF' }} />
      </Box>
    </Card>
  );
}
