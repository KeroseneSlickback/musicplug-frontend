import React from 'react';
// Simple backdrop comp for style
function Backdrop(props) {
	return <div className="backdrop" onClick={props.closeModal} />;
}

export default Backdrop;
