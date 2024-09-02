"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  palette: {
    primary: {
      main: "#0e0d22",
      light: "#545454",
    },
    secondary: {
      main: "#ff9f24",
      contrastText: "#fff",
    },
  },

  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
