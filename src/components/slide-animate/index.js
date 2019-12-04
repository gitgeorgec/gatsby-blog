import React from 'react'
import cx from 'classnames';
import './style.sass';

const defaultProps = {
	slideDirection: 'up'
}

const SlideAnimate = ({
	className,
	children,
	slideDirection,
	background,
}) => {

	return (
		<div className={cx(
			'my-slide-wrapper',
			`my-slide-wrapper__${slideDirection}`,
			className,
		)}>
			{children}
			<div className="my-slide-cover" style={{ background, }}/>
		</div>
	)
};

SlideAnimate.defaultProps = defaultProps;

export default SlideAnimate


