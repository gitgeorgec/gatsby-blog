import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import './style.sass';

const propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		content: PropTypes.string,
		date: PropTypes.string,
	}),
	onClick: PropTypes.func,
}

const PostCard = ({
	data,
	onClick,
}) => {
	const { title, content, date, } = data;

	return (
		<Paper onClick={() => onClick(data)} className="post-card">
			<Typography variant="h5" component="h3">
				{title}
			</Typography>
			<Typography component="p">
				{content}
			</Typography>
			<Typography component="p">
				{date}
			</Typography>
		</Paper>
	)
}

PostCard.propTypes = propTypes;

export default PostCard;
