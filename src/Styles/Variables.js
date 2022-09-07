import { createGlobalStyle } from "styled-components";

// Global variables, themes, Global styles, and media breaks

export const DarkTheme = {
  hero: "#40B590",
  primary: "#DA1884",
  primaryAlt: "#E61E8C",
  secondary: "#9B1B68",
  secondaryAlt: "#AD1F74",
  background: "#0C020F",
  backgroundAlt: "#19041F",
  subdued: "#1E1A2D",
  subduedAlt: "#27223A",
  alternative: "#3E398E",
  alternativeAlt: "#453F9D",
  fontColor: "#f7f7f7",
  fontColorAlt: "#f7f7f7",
  highlightWhite: "#ebeaee",
  highlightMuted: "#CECBD4",
  highlightDark: "#BBB9C1",
  warning: "#9b0832",
};

export const LightTheme = {
  hero: "#40B590",
  primary: "#DA1884",
  primaryAlt: "#E61E8C",
  secondary: "#9B1B68",
  secondaryAlt: "#AD1F74",
  background: "#E0E1EB",
  backgroundAlt: "#E6E7EF",
  subdued: "#F2F3F7",
  subduedAlt: "#F9F9FB",
  alternative: "#3E398E",
  alternativeAlt: "#453F9D",
  fontColor: "#08070C",
  fontColorAlt: "#f7f7f7",
  highlightWhite: "#ebeaee",
  highlightMuted: "#808AAD",
  highlightDark: "#1F326E",
  warning: "#9b0832",
};

export const GlobalStyles = createGlobalStyle` 
  body {
    background-color: ${(props) => props.theme.background};
  }
`;

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tabletS: "600px",
  tabletM: "768px",
  tabletL: "850px",
  laptop: "1024px",
  laptopL: "1440px",
};

// from tabletMedium => go to mobile design

export const devices = {
  mobileS: `only screen and (min-width: ${sizes.mobileS})`,
  mobileM: `only screen and (min-width: ${sizes.mobileM})`,
  mobileL: `only screen and (min-width: ${sizes.mobileL})`,
  tabletS: `only screen and (min-width: ${sizes.tabletS})`,
  tabletM: `only screen and (min-width: ${sizes.tabletM})`,
  tabletL: `only screen and (min-width: ${sizes.tabletL})`,
  laptop: `only screen and (min-width: ${sizes.laptop})`,
  laptopL: `only screen and (min-width: ${sizes.laptopL})`,
};
