import styled from 'styled-components';
import Icon from './Icon';

const Svg = styled(Icon)`
	fill: ${props => props.theme.fontColorAlt};
`;

export const AddSVG = props => (
	<Svg viewBox="0 0 24 24" {...props}>
		<path d="M0 0h24v24H0V0z" fill="none" />
		<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
	</Svg>
);
