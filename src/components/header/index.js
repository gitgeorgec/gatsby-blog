import React, { useState, } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Hidden,
}from '@material-ui/core';
import ChromeReaderModeRoundedIcon from '@material-ui/icons/ChromeReaderModeRounded';
import LeftDrawer from '../left-drawer';
import './style.sass';

const propTypes = {
	title: PropTypes.string
}

const Header = ({title}) => {
	const [ isDrawerVisible, setIsDrawerVisible, ] = useState(false)

	return (
		<AppBar className="header">
			<Toolbar>
				<Typography
					variant="h5"
					noWrap
					className="header__title"
				>
					<Link to='/'>{title}</Link>
				</Typography>
				<Hidden xsDown>
					<div className="header__navigator">
						<Link to="/blog">
							BLOG
						</Link>
						<Link to="/about">
							ABOUT
						</Link>
					</div>
				</Hidden>
				<LeftDrawer
					isVisible={isDrawerVisible}
					onClose={() => setIsDrawerVisible(false)}
				/>
			</Toolbar>
			<Hidden smUp>
				<IconButton
					className="header__menu-button"
					aria-label="menu"
					onClick={() => setIsDrawerVisible(true)}
				>
					<ChromeReaderModeRoundedIcon />
				</IconButton>
			</Hidden>
		</AppBar>
	)
}

Header.propTypes = propTypes;

export default Header;
