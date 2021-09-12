import React from 'react';

import './Styles/SortSelector.css';

function SortSelector() {
	return (
		<div className="sortDiv">
			<a className="newSort" href="/">
				New Posts
			</a>
			<a className="topSort" href="/">
				Top Posts
			</a>
		</div>
	);
}

export default SortSelector;
