import { createGlobalStyle } from 'styled-components';

export const DarkTheme = {
	hero: '#40B590',
	primary: '#c52772',
	primaryAlt: '#cf2e7d',
	secondary: '#a51d62',
	secondaryAlt: '#b42269',
	background: '#08070C',
	backgroundAlt: '#120F1A',
	subdued: '#191627',
	subduedAlt: '#221F33',
	alternative: '#1E265A',
	alternativeAlt: '#242D6B',
	fontColor: '#f7f7f7',
	fontColorAlt: '#f7f7f7',
	highlightWhite: '#ebeaee',
	highlightMuted: '#CECBD4',
	highlightDark: '#BBB9C1',
	warning: '#9b0832',
};

// On hover some spots are too light

export const LightTheme = {
	hero: '#4ac09b',
	primary: '#c52772',
	primaryAlt: '#cf2e7d',
	secondary: '#a51d62',
	secondaryAlt: '#b42269',
	background: '#E0E1EB',
	backgroundAlt: '#E6E7EF',
	subdued: '#F2F3F7',
	subduedAlt: '#F6F6F9',
	alternative: '#1E265A',
	alternativeAlt: '#242D6B',
	fontColor: '#08070C',
	fontColorAlt: '#f7f7f7',
	highlightWhite: '#ebeaee',
	highlightMuted: '#808AAD',
	highlightDark: '#1F326E',
	warning: '#9b0832',
};

// Really need to fix up the font colors

export const GlobalStyles = createGlobalStyle` 
  body {
    background-color: ${props => props.theme.background};
  }
`;

// export const DarkTheme = {
// 	liteHero: '#59C5A3',
// 	hero: '#4ac09b',
// 	primary: '#c52772',
// 	primaryAlt: '#cf2e7d',
// 	secondary: '#a51d62',
// 	secondaryAlt: '#b42269',
// 	background: '#141221',
// 	backgroundAlt: '#211f2e',
// 	subdued: '#272432',
// 	subduedAlt: '#2e2b3b',
// 	alternative: '#301f33',
// 	alternativeAlt: '#422843',
// 	fontColor: '#f7f7f7',
// 	highlightWhite: '#ebeaee',
// 	highlightMuted: '#a39abc',
// 	highlightDark: '#5e5577',
// 	warning: '#9b0832',
// };

// export const LightTheme = {
// 	liteHero: '#59C5A3',
// 	hero: '#4ac09b',
// 	primary: '#c52772',
// 	primaryAlt: '#cf2e7d',
// 	secondary: '#a51d62',
// 	secondaryAlt: '#b42269',
// 	background: '#fff',
// 	backgroundAlt: '#fff',
// 	subdued: '#fff',
// 	subduedAlt: '#fff',
// 	alternative: '#fff',
// 	alternativeAlt: '#fff',
// 	fontColor: '#000',
// 	fontColorAlt: '#f7f7f7',
// 	highlightWhite: '#ebeaee',
// 	highlightMuted: '#a39abc',
// 	highlightDark: '#5e5577',
// 	warning: '#9b0832',
// };
