import * as React from 'react';
import { ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

interface SimpleContainerProps {
    children: ReactNode;
  }

export default function SimpleContainer( {children} : SimpleContainerProps) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
        {children}
            </Box>
      </Container>
    </React.Fragment>
  );
}
