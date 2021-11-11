import { createGlobalStyle } from 'styled-components';

export const DarkTheme = {
	liteHero: '#59C5A3',
	hero: '#4ac09b',
	primary: '#c52772',
	primaryAlt: '#cf2e7d',
	secondary: '#a51d62',
	secondaryAlt: '#b42269',
	background: '#141221',
	backgroundAlt: '#211f2e',
	subdued: '#272432',
	subduedAlt: '#2e2b3b',
	alternative: '#301f33',
	alternativeAlt: '#422843',
	fontColor: '#f7f7f7',
	highlightWhite: '#ebeaee',
	highlightMuted: '#a39abc',
	highlightDark: '#5e5577',
	warning: '#9b0832',
};

export const LightTheme = {
	liteHero: '#59C5A3',
	hero: '#4ac09b',
	primary: '#c52772',
	primaryAlt: '#cf2e7d',
	secondary: '#a51d62',
	secondaryAlt: '#b42269',
	background: '#141221',
	background: '#fff',
	backgroundAlt: '#211f2e',
	subdued: '#272432',
	subduedAlt: '#2e2b3b',
	alternative: '#301f33',
	alternativeAlt: '#422843',
	fontColor: '#f7f7f7',
	highlightWhite: '#ebeaee',
	highlightMuted: '#a39abc',
	highlightDark: '#5e5577',
	warning: '#9b0832',
};

export const GlobalStyles = createGlobalStyle` 
  body {
    background-color: ${props => props.theme.background};
  }
`;
