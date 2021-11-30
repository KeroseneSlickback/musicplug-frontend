import React from 'react';

import {
	FormBlock,
	PostInput,
	PostLabel,
	PostPatchDiv,
	PostTextArea,
} from '../../Components/Forms';

function PostPatchModule(props) {
	return (
		<PostPatchDiv>
			<FormBlock>
				<PostLabel htmlFor="title">Title:</PostLabel>
				<PostInput
					name="title"
					type="text"
					value={props.patchData.title}
					onChange={props.handlePostPatch}
				></PostInput>
			</FormBlock>
			<FormBlock>
				<PostLabel htmlFor="body">Recommendation explaination:</PostLabel>
				<PostTextArea
					name="body"
					value={props.patchData.body}
					onChange={props.handlePostPatch}
				></PostTextArea>
			</FormBlock>
		</PostPatchDiv>
	);
}

export default PostPatchModule;
