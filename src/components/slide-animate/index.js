import React from 'react'
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.sass';

const propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	slideDirection: PropTypes.string,
};

const defaultProps = {
	slideDirection: 'up'
}

const SlideAnimate = ({
	className,
	children,
	slideDirection,
}) => {

	return (
		<div className={cx(
			'my-slide-wrapper',
			`my-slide-wrapper__${slideDirection}`,
			className,
		)}>
			{children}
			<div className="my-slide-cover"/>
		</div>
	)
};

SlideAnimate.propTypes = propTypes;
SlideAnimate.defaultProps = defaultProps;

export default SlideAnimate


