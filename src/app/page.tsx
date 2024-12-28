import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        height="90vh"
        textAlign="center"
      >
        <Box width="30vw" height="30vw" marginBottom="10vw">
          <Image
            src="/assets/images/NASDAQ_Logo.png"
            alt="Nasdaq logo"
            width={500}
            height={500}
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          />
          <Link href="/explore">
            <Button variant="containedPrimary">Explore More</Button>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          padding: '1vw',
          bgcolor: 'black',
          textAlign: 'center',
        }}
      >
        <Typography variant="body1" fontWeight={300} color="#fff">
          Norhan Ashraf El-Shemerly
        </Typography>
      </Box>
    </>
  );
}
