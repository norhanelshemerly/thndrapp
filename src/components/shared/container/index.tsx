'use client';
import type { FC, ReactNode } from 'react';
import MUIContainer from '@mui/material/Container';
import {
  useMediaQuery,
  useTheme,
  ContainerProps as MUIContainerProps,
} from '@mui/material';

interface ContainerProps {
  fullScreenMobile?: boolean;
  children: ReactNode;
}

const Container: FC<ContainerProps & MUIContainerProps> = ({
  children,
  disableGutters,
  fullScreenMobile,
  sx,
  ...props
}) => {
  const theme = useTheme();

  // Use media queries to determine screen size based on updated breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLaptop = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('xl', 2560));
  const isUltraWide = useMediaQuery(theme.breakpoints.up(2560));

  // Set maxWidth based on screen size
  let maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'md';
  if (isMobile) {
    maxWidth = fullScreenMobile ? 'md' : 'xs';
  } else if (isTablet) {
    maxWidth = 'sm';
  } else if (isLaptop) {
    maxWidth = 'md';
  } else if (isDesktop) {
    maxWidth = 'lg';
  } else if (isLargeScreen) {
    maxWidth = 'xl';
  } else if (isUltraWide) {
    maxWidth = 'xxl';
  }

  // Set padding dynamically based on screen size and disableGutters prop
  const padding = disableGutters
    ? { xs: '0px' }
    : {
        xs: '16px', // Small mobile
        sm: '20px', // Tablets
        md: '32px', // Small laptop
        lg: '48px', // Larger desktops
        xl: '64px', // Standard large screens
        xxl: '80px', // For 4K screens (2560px)
      };

  return (
    <MUIContainer
      sx={{
        paddingInlineStart: padding,
        paddingInlineEnd: padding,
        maxWidth: isUltraWide ? '2560px' : maxWidth,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        ...sx,
      }}
      {...props}
    >
      {children}
    </MUIContainer>
  );
};

Container.defaultProps = {
  fullScreenMobile: false,
};

export default Container;
