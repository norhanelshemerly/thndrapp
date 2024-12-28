'use client';
import type { FC } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Grid2 } from '@mui/material';

const NotFound: FC = () => {
  return (
    <Grid2
      sx={{ backgroundColor: '#F8F6F1' }}
      height="calc(100vh - 65px)"
      container
      flexDirection="column"
      justifyContent="center"
    >
      <Typography
        lineHeight={1}
        fontSize="clamp(80px, calc(80px + (200 - 80) * ((100vw - 1200px) / (1920 - 1200))), 200px) !important"
        fontWeight="bold"
        align="center"
      >
        404
      </Typography>

      <Typography mb="20px" variant="body2" fontWeight="bold" align="center">
        Not found
      </Typography>

      <Grid2 container justifyContent="center">
        <Link href="/">
          <Button variant="contained">Home Page</Button>
        </Link>
      </Grid2>
    </Grid2>
  );
};

export default NotFound;
