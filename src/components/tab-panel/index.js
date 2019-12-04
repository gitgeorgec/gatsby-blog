import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
	<Typography
		component="div"
		role="tabpanel"
		hidden={value !== index}
		id={`wrapped-tabpanel-${index}`}
		aria-labelledby={`wrapped-tab-${index}`}
		{...other}
	>
		<Box p={3}>{children}</Box>
	</Typography>
	);
}

export default TabPanel;
