import styled from 'styled-components';
import Icon from './Icon';

const Svg = styled(Icon)`
	height: 16px;
	margin: auto 4px auto auto;
	fill: ${props => props.theme.fontColor};
`;

export const HeadphoneSVG = props => (
	<Svg viewBox="0 0 24 24" {...props}>
		<g>
			<path d="M12,3c-4.97,0-9,4.03-9,9v7c0,1.1,0.9,2,2,2h4v-8H5v-1c0-3.87,3.13-7,7-7s7,3.13,7,7v1h-4v8h4c1.1,0,2-0.9,2-2v-7 C21,7.03,16.97,3,12,3z M7,15v4H5v-4H7z M19,19h-2v-4h2V19z" />
		</g>
	</Svg>
);
