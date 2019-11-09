import React from 'react';
import PropTypes from 'prop-types';
import {
	SwipeableDrawer,
	List,
	ListItem,
	ListItemText
} from '@material-ui/core';

const propTypes = {
	isVisible: PropTypes.bool,
	onClose: PropTypes.func,
}
const defaultProps = {
	isVisible: false,
	onClose: () => {},
}

const LeftDrawer = ({
	isVisible,
	onClose,
}) => (
	<SwipeableDrawer
		anchor="right"
		open={isVisible}
		onClose={onClose}
		ModalProps={{
			keepMounted: true,
		}}
	>
			<List>
			{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
				<ListItem
					button
					divider
					key={text}
					onClick={onClose}
				>
					<ListItemText primary={text}/>
				</ListItem>
			))}
			</List>
	</SwipeableDrawer>
)

LeftDrawer.propTypes = propTypes;
LeftDrawer.defaultProps = defaultProps;

export default LeftDrawer
