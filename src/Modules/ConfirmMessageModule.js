import React from 'react';
import { MessageContainer } from '../Components/Messages';

function ConfirmMessageModule({ string }) {
	return (
		<MessageContainer>
			<p>{string}</p>
		</MessageContainer>
	);
}

export default ConfirmMessageModule;
