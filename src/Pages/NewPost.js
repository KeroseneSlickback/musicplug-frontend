import React from 'react';

function NewPost(props) {
	function handleSubmit() {
		console.log('Hi!');
	}

	function handleChange() {}

	return (
		<div>
			<div>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="title"></label>
						<input
							onChange={handleChange}
							htmlFor="title"
							name="title"
							type="text"
						/>
					</div>
					<div>
						<label htmlFor=""></label>
						<input type="text" />
					</div>
					<div>
						<label htmlFor=""></label>
						<input type="text" />
					</div>
					<div>
						<label htmlFor=""></label>
						<input type="text" />
					</div>
				</form>
			</div>
		</div>
	);
}

export default NewPost;
