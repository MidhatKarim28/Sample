import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Logo from '../assets/LogoBlue.png';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#000B1C',
        py: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 2,
        width: '100%',
        position: 'relative',
        bottom: 0,
        left: 0,
        top: '1065%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 10,
          mt: 10,
          position: 'relative',
        }}
      >
        <img src={Logo} alt="Logo" style={{ width: 350, height: 80, marginLeft: 5 }} />
        <Typography variant="body2" color="white" sx={{ marginLeft: 10, marginRight: 10 }}>
          Join us on our mission to take Pakistani esports to the next level.
        </Typography>
        <Box sx={{ ml: 4 }}>
          <IconButton sx={{ marginRight: 3, color: 'white' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ marginRight: 2, color: 'white' }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ marginRight: 2, color: 'white' }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ marginRight: 2, color: 'white' }}>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>

      <Box>
        <div style={{ width: '2000px', borderBottom: '2px solid #0000FF', marginLeft: '-600px', marginRight: '-600px', marginBottom: '15px' }}></div> {/* Add the blue line */}
        <Typography variant="body2" color="white" sx={{ display: 'flex', alignItems: 'center' }}>
          <span>
            &copy; {new Date().getFullYear()} Pathtopro League - All Rights Reserved
          </span>
          <span style={{ marginLeft: '720px' }}>Powered by Protodev</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
