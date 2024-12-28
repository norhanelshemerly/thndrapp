'use client';
import { useState, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import '../styles/globals.css';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollPosition from 'src/hooks/useScrollPosition';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [didScroll, setDidScroll] = useState(false);
  useScrollPosition(
    ({ currPos }: { currPos: { x: number; y: number } }) => {
      const isShow = currPos.y < -74;
      if (isShow !== didScroll) setDidScroll(isShow);
    },
    [didScroll]
  );

  return (
    <html lang="en">
      <head>
        {/* Preload Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Material-UI Theme Provider */}
        <ThemeProvider theme={theme}>
          {/* Reset CSS Baseline */}
          <CssBaseline />

          <Fab
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            color="primary"
            sx={{
              zIndex: 4000,
              position: 'fixed',
              bottom: '40px',
              insetInlineEnd: '32px',
              width: '52px',
              height: '52px',
              transition: 'transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              transform: didScroll ? 'none' : 'scale(0)',
            }}
          >
            <KeyboardArrowUpIcon sx={{ color: 'black' }} />
          </Fab>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
