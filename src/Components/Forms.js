import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 32px;

	h1 {
		color: #f7f7f7;
		font-size: 2.1rem;
		padding-bottom: 24px;
	}

	h3 {
		color: #f7f7f7;
		font-size: 1.25rem;
	}
`;

export const Form = styled.form``;

export const FormBlock = styled.div`
	padding-top: 20px;
	display: flex;
	flex-direction: column;
`;

export const FormInput = styled.input`
	color: #f7f7f7;
	background-color: #272432;
	border: 2px solid #5e5577;
	border-radius: 3px;
	padding: 4px 6px;
	height: 26px;
	font-size: 1rem;
`;

export const FormLabel = styled.label`
	font-size: 1.1rem;
	padding: 8px 0;
	color: #bababa;
`;

export const PostInput = styled.input`
	color: #f7f7f7;
	background-color: #272432;
	border: 2px solid #5e5577;
	border-radius: 3px;
	padding: 4px 6px;
	height: 26px;
	font-size: 1rem;
	margin-bottom: 12px;
`;

export const PostTextArea = styled(PostInput).attrs({
	as: 'textarea',
})`
	height: 140px;
	font-family: inherit;
	font-size: inherit;
`;

export const PostLabel = styled.label`
	margin-bottom: 12px;
	color: #f7f7f7;
	font-size: 1.3rem;
`;

export const PostSelect = styled.select`
	width: 150px;
	background-color: #272432;
	border: 2px solid #5e5577;
	border-radius: 3px;
	font-size: 1rem;
	height: 38px;
	cursor: pointer;
	color: #f7f7f7;
`;
