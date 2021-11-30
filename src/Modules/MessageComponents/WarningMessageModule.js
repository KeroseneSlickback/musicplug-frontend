import React from 'react';
import { WarningContainer } from '../../Components/Messages';

function WarningModule({ string }) {
	return (
		<WarningContainer>
			<p>{string}</p>
		</WarningContainer>
	);
}

export default WarningModule;
