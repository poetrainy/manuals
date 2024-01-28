import { extendTheme } from "@chakra-ui/react";

const colors = {
  black: "#999999",
  primary: {
    900: "#021a1e",
    800: "#04343b",
    700: "#064d59",
    500: "#086776",
    400: "#468d98",
    300: "#84b3bb",
    200: "#c1d9dd",
    50: "#f4f6f6",
  },
};
const styles = {
  global: {
    body: {
      color: "black",
      bg: "primary.50",
      fontSize: "14px",
      fontFamily: "body",
      a: {
        textDecoration: "none",
      },
      li: {
        listStyleType: "none",
      },
      pre: {
        fontFamily: "body",
        whiteSpace: "pre-wrap",
      },
    },
    svg: {
      fill: "primary",
    },
    // "::selection": {
    //   background: "tomato",
    // },
    // "::-moz-selection": {
    //   background: "tomato",
    // },
  },
};
const fonts = {
  body: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
};

const theme = extendTheme({
  styles,
  colors,
  fonts,
});

export default theme;
