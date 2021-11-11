import React from 'react';
import { RegularContainer } from '../Components/Messages';

function RegularMessageModule({ string }) {
	return (
		<RegularContainer>
			<p>{string}</p>
		</RegularContainer>
	);
}

export default RegularMessageModule;
