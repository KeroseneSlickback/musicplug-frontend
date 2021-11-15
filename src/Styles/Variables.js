import { createGlobalStyle } from 'styled-components';

export const DarkTheme = {
	hero: '#40B590',
	primary: '#c52772',
	primaryAlt: '#cf2e7d',
	secondary: '#a51d62',
	secondaryAlt: '#b42269',
	background: '#08070C',
	backgroundAlt: '#120F1A',
	subdued: '#151221',
	subduedAlt: '#1B182A',
	alternative: '#1E265A',
	alternativeAlt: '#242D6B',
	fontColor: '#f7f7f7',
	fontColorAlt: '#f7f7f7',
	highlightWhite: '#ebeaee',
	highlightMuted: '#CECBD4',
	highlightDark: '#BBB9C1',
	warning: '#9b0832',
};

export const LightTheme = {
	hero: '#40B590',
	primary: '#c52772',
	primaryAlt: '#cf2e7d',
	secondary: '#a51d62',
	secondaryAlt: '#b42269',
	background: '#E0E1EB',
	backgroundAlt: '#E6E7EF',
	subdued: '#F2F3F7',
	subduedAlt: '#F9F9FB',
	alternative: '#1E265A',
	alternativeAlt: '#242D6B',
	fontColor: '#08070C',
	fontColorAlt: '#f7f7f7',
	highlightWhite: '#ebeaee',
	highlightMuted: '#808AAD',
	highlightDark: '#1F326E',
	warning: '#9b0832',
};

export const GlobalStyles = createGlobalStyle` 
  body {
    background-color: ${props => props.theme.background};
  }
`;

const sizes = {
	mobileSmall: '280px',
	mobileMedium: '380px',
	mobileLarge: '480px',
	tabletSmall: '580px',
	tabletMedium: '680px',
	tabletLarge: '780px',
	laptopSmall: '880px',
	laptopMedium: '980px',
	laptopLarge: '1080px',
	desktop: '1440px',
};

// from tabletMedium => go to mobile design

export const devices = {
	mobileSmall: `only screen and (max-width: ${sizes.mobileSmall})`,
	mobileMedium: `only screen and (max-width: ${sizes.mobileMedium})`,
	mobileLarge: `only screen and (max-width: ${sizes.mobileLarge})`,
	tabletSmall: `only screen and (max-width: ${sizes.tabletSmall})`,
	tabletMedium: `only screen and (max-width: ${sizes.tabletMedium})`,
	tabletLarge: `only screen and (max-width: ${sizes.tabletLarge})`,
	laptopSmall: `only screen and (max-width: ${sizes.laptopSmall})`,
	laptopMedium: `only screen and (max-width: ${sizes.laptopMedium})`,
	laptopLarge: `only screen and (max-width: ${sizes.laptopLarge})`,
	desktop: `only screen and (max-width: ${sizes.desktop})`,
};
