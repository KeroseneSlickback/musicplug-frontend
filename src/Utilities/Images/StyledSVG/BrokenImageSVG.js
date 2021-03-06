import styled from 'styled-components';
import Icon from './Icon';
import { devices } from '../../../Styles/Variables';

const Svg = styled(Icon)`
	border-radius: 6px;
	max-height: 75px;
	width: 75px;
	box-shadow: 0px 0px 3px 0px ${props => props.theme.highlightDark};
	margin: 2px;
	fill: ${props => props.theme.fontColor};

	@media ${devices.tabletS} {
		max-height: 100px;
		width: 100px;
	}

	@media ${devices.tabletM} {
		max-height: 120px;
		width: 120px;
	}
`;

export const BrokenImageSVG = props => (
	<Svg viewBox="0 0 24 24" {...props}>
		<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-4.58l.99.99 4-4 4 4 4-3.99L19 12.43V19zm0-9.41l-1.01-1.01-4 4.01-4-4-4 4-.99-1V5h14v4.59z" />
	</Svg>
);
