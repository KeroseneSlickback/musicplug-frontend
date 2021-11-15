import React, { useState } from 'react';
import { SmallStyledButton } from '../../Components/Buttons';
import {
	FooterContainer,
	FooterMessageDiv,
	FooterUserDiv,
} from '../../Components/FooterComponents';

import UserModal from '../Modals/UserModal';
import { Backdrop } from '../../Components/Backdrop';
import { SettingSVG } from '../../Utilities/Images/StyledSVG/SettingSVG';
import { DarkModeSVG } from '../../Utilities/Images/StyledSVG/DarkModeSVG';
import { LightModeSVG } from '../../Utilities/Images/StyledSVG/LightModeSVG';

function Footer({ themeToggle, theme }) {
	const [openModal, setOpenModal] = useState(false);

	const toggleUserModal = () => {
		setOpenModal(prev => !prev);
	};
	return (
		<FooterContainer>
			<SmallStyledButton smaller onClick={themeToggle}>
				{theme === 'dark' ? <DarkModeSVG /> : <LightModeSVG />}
			</SmallStyledButton>
			<FooterUserDiv>
				<SmallStyledButton smaller onClick={() => toggleUserModal()}>
					<SettingSVG />
					User Settings
				</SmallStyledButton>
			</FooterUserDiv>
			<FooterMessageDiv>
				<p>
					MusicPlug is a demonstration app created by Mitchell William Spaur.
				</p>
			</FooterMessageDiv>

			{openModal ? (
				<UserModal
					closeModal={toggleUserModal}
					toggleUserModal={toggleUserModal}
				/>
			) : null}
			{openModal ? <Backdrop onClick={toggleUserModal} /> : null}
		</FooterContainer>
	);
}

export default Footer;
