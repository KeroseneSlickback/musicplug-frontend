import React from 'react';
import { ConfirmContainer } from '../../Components/Messages';

function ConfirmMessageModule({ string }) {
	return (
		<ConfirmContainer>
			<p>{string}</p>
		</ConfirmContainer>
	);
}

export default ConfirmMessageModule;
