// import { createMuiTheme } from "@material-ui/core/styles";
import { DARK, LIGHT } from "../constants";

export const colors = {
  danger: "#FF1744",
  dangerLight: "#FF9DB0",
  info: "#1FB4FF",
  infoLight: "#DFF4FF",
  success: "#6CFFA9",
  successLight: "#BCFFD8",
  disabled: "rgba(220, 220, 220, 0.5)",

  dteOrange: "#F15E30",
  transparent: "rgba(0,0,0,0)",
  orange: "#F6956B",
  yellow: "#EEB868",
  blue: "#1B96C6",
  darkBlue: "#456990",
  oceanBlue: "#31D8A6",
  purple: "#767793",
  pink: "#EF767A",
  brown: "#C86C18",
  green: "#1ADD45",
  red: "#EB3710",
  whiteWithOpacity: (opacity) => `rgba(255, 255, 255, ${opacity})`,
  greyWithOpacity: (opacity) => `rgba(196, 196, 196, ${opacity}`,
};

const textLight = {
  primary: "#000000",
  secondary: "#211F1F",
  tertiary: '#625E5E',
  fontFamily: "'Montserrat', sans-serif",
};

const textDark = {
  primary: "#F4F4F4",
  secondary: "rgba(244, 244, 244, 0.87)",
  tertiary: "#C4C4C4",
  fontFamily: "'Montserrat', sans-serif",
};

const backgroundLight = {
  page: "#FFFFFF",
  cardOuter: "rgba(0, 0, 0, 0.005)",
  cardInner: "#FFFFFF",
  cardOuterBorder: "rgba(200, 200, 200, 0.5)",
  cardInnerBorder: "rgba(200, 200, 200, 0.5)",
  input: "#F0F1F3",
  inputBorder: "#D1D1D1",
  inputSeparator: "rgba(200, 200, 200, 0.15)",
  textBubble: "#f8f9fa",
  bubbleBorder: "rgba(200, 200, 200, 0.2)",
  lightBorder: "rgba(220, 220, 220, 0.2)",
  dropdown: "#E9EDF6",
  tabInactive: "#ECECEC",
  shadowStyle: {
    WebkitBoxShadow: "4px 5px 9px 2px rgba(210,210,210,0.5)",
    boxShadow: "4px 5px 9px 2px rgba(210,210,210,0.5)",
  },
  pronouncedShadow: {
    WebkitBoxShadow: "6px 7px 8px 4px rgba(216,216,216,0.75)",
    boxShadow: "6px 7px 8px 4px rgba(216,216,216,0.75)",
  },
  inverseShadow: {
    WebkitBoxShadow: "inset 2px 2px 12px 2px rgba(0,0,0,0.1)",
    boxShadow: "inset 2px 2px 12px 2px rgba(0,0,0,0.1)",
  }
};

const backgroundDark = {
  page: "#020510",
  cardOuter: "#0E1220",
  cardInner: "#0B0E1A",
  cardOuterBorder: "#131622",
  cardInnerBorder: "rgba(0,0,0,0.15)",
  input: "#0E131F",
  inputBorder: "rgba(200, 200, 200, 0.2)",
  inputSeparator: "#161C29",
  textBubble: "#111420",
  bubbleBorder: colors.transparent,
  lightBorder: "rgba(200, 200, 200, 0.2)",
  dropdown: "#111729",
  tabInactive: "#141827",
  shadowStyle: {
    WebkitBoxShadow: "3px 4px 7px 0px rgba(0,0,0,0.35)",
    boxShadow: "3px 4px 7px 0px rgba(0,0,0,0.35)",
  },
  pronouncedShadow: {
    WebkitBoxShadow: "4px 5px 8px 4px rgba(0,0,0,0.7)",
    boxShadow: "4px 5px 8px 4px rgba(0,0,0,0.7)",
  },
  inverseShadow: {
    WebkitBoxShadow: "inset 2px 2px 12px 2px rgba(0,0,0,0.65)",
    boxShadow: "inset 2px 2px 12px 2px rgba(0,0,0,0.65)",
  }
};

const light_theme = {
  name: LIGHT,
  background: backgroundLight,
  text: textLight,
  color: colors,
};

const dark_theme = {
  name: DARK,
  background: backgroundDark,
  text: textDark,
  color: colors,
};

export const Theme = {
  light: light_theme,
  dark: dark_theme,
};

// export const muiOrangeTheme = createMuiTheme({
//   typography: {
//     fontFamily: "'Montserrat', sans-serif"
//   },
//   palette: {
//     primary: {
//       main: colors.dteOrange,
//     },
//     secondary: {
//       main: "#F69D77",
//     },
//   },
// });

export const barChartSelected = {
  opex: "#F16429",
  capex: "#F88A30",
  revenue: "#FFAF37",
};
export const barChartDefault = {
  opex: "#B7B7B7",
  capex: "#8F8F8F",
  revenue: "#676767",
};