"use client";

import { createTheme } from "@mui/material/styles";

// Define your custom colors and palette
const customPalette = {
  primary: {
    main: "#F1862E", // Orange
  },
  secondary: {
    main: "#7F7F7F", // Gray
  },
  grey: {
    500: "#7F7F7F", // Gray
    600: "#5D5D5D", // Medium Grey
    700: "#4F4F4F", // Dark Grey
  },
  background: {
    default: "#FFFFFF", // White background
  },
  text: {
    primary: "#000000", // Black text
    secondary: "#7F7F7F", // Gray text
  },
};

// Base breakpoints for responsiveness
const breakpoints = {
  values: {
    xs: 0,      // Small mobile
    sm: 600,    // Tablet (portrait)
    md: 900,    // Small laptop
    lg: 1200,   // Large laptop / standard desktop
    xl: 1600,   // Extra large desktop
    xxl: 2560,  // 4K / ultra-wide screens (2560px)
  },
};


// Create the base theme
const baseTheme = createTheme({
  palette: customPalette,
  breakpoints,
});

// Extend the base theme with typography and component customizations
const theme = createTheme(baseTheme, {
  typography: {
    fontFamily: "'Tajawal', sans-serif",
    h1: {
      fontSize: "36px", // Main headlines, numbers in statistics
      fontWeight: 700,
      lineHeight: 1.2,
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "25px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "28px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "24px",
      },
    },
    h2: {
      fontSize: "30px", // Section titles
      fontWeight: 700,
      lineHeight: 1.3,
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "28px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "24px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
    h3: {
      fontSize: "20px", // Subheadings, news titles
      fontWeight: 600,
      lineHeight: 1.4,
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "18px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
    },
    h4: {
      fontSize: "18px", // Buttons, ambassador names, footer section titles
      fontWeight: 500,
      lineHeight: 1.5,
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "16px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
    body1: {
      fontSize: "18px", // Paragraph text, statistics labels
      lineHeight: 1.6,
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "16px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
    body2: {
      fontSize: "16px", // Icon descriptions, news content, ambassador roles, footer links
      lineHeight: 1.6,
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "14px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
    },
    button: {
      fontSize: "18px", // Buttons
      fontWeight: 500,
      textTransform: "none",
      lineHeight: 1.5,
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "16px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "'Tajawal', sans-serif",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          padding: "8px 16px",
          textTransform: "none",
          fontFamily: "'Tajawal', sans-serif",
          width: "220px", // Increased width
          height: "50px", // Increased height
          [baseTheme.breakpoints.down("lg")]: {
            width: "220px",
            height: "55px",
          },
          [baseTheme.breakpoints.down("md")]: {
            width: "200px",
            height: "50px",
          },
          [baseTheme.breakpoints.down("sm")]: {
            width: "180px",
            height: "45px",
          },
        },
      },
      variants: [
        {
          props: { variant: "containedPrimary" },
          style: {
            backgroundColor: "#F1862E",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#d97628",
            },
          },
        },
        {
          props: { variant: "outlinedPrimary" },
          style: {
            borderColor: "#F1862E",
            color: "#F1862E",
            "&:hover": {
              backgroundColor: "#FFF5ED",
            },
          },
        },
      ],
    },
  },
});

export default theme;