import styled from 'styled-components';
import { devices } from '../Styles/Variables';

export const NewPostDiv = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 2;
	margin: 20px 10px;

	a {
		text-decoration: none;
		color: ${props => props.theme.fontColorAlt};
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${props => props.theme.primary};
		border-radius: 6px;
		box-shadow: 0px 0px 3px 1px ${props => props.theme.highlightDark};
		font-size: 0.8rem;
		height: 30px;
		width: 90px;

		svg {
			padding-right: 2px;
			height: 18px;
		}

		&:hover {
			background-color: ${props => props.theme.primaryAlt};
			box-shadow: 0px 0px 3px 1px ${props => props.theme.highlightMuted};
		}
	}

	@media ${devices.tabletS} {
		position: static;
		margin: 0;

		a {
			font-size: 1rem;
			height: 40px;
			width: 100px;
			margin: 0px 0 4px 0;

			svg {
				height: 22px;
			}
		}
	}

	@media ${devices.tabletM} {
		a {
			font-size: 1rem;
			height: 40px;
			width: 100px;
			margin: 0px 0 4px 0;
		}
	}

	@media ${devices.tabletL} {
		a {
			font-size: 1.2rem;
			height: 50px;
			width: 120px;
		}
	}
`;
