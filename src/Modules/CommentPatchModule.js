import React from 'react';
import { CommentFormDiv } from '../Components/PostComponents';
import {
	CommentTextArea,
	Form,
	CommentTextLabel,
	CommentButtonDiv,
} from '../Components/Forms';

function CommentPatchModule(props) {
	return (
		<CommentFormDiv>
			<Form>
				<CommentTextLabel>Edit:</CommentTextLabel>
				<CommentTextArea
					name="body"
					placeholder="I love this song!"
					value={props.patchData.body}
					onChange={props.handleCommentPatch}
					required
				/>
			</Form>
		</CommentFormDiv>
	);
}

export default CommentPatchModule;
