import React, { useState, } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import {
	Toolbar,
	Typography,
	IconButton,
	Hidden,
	Link as MaterialLink,
}from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LeftDrawer from '../left-drawer';
import Img from 'gatsby-image';
import './style.sass';

const propTypes = {
	title: PropTypes.string
}

const Header = ({title}) => {
	const data = useStaticQuery(graphql`
		query {
			heroImage: file(relativePath: { eq: "mac-book.jpg" }) {
			childImageSharp {
				fluid (maxWidth: 1680) {
				...GatsbyImageSharpFluid
				}
			}
			}
		}
	`)
	const [ isDrawerVisible, setIsDrawerVisible, ] = useState(false)

	return (
		<div className="header">
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
						<Link to="/about">
								ABOUT
						</Link>
						<Link to="/about">
							BLOG
						</Link>
					</div>
				</Hidden>
				<Hidden smUp>
					<IconButton
						className="header__menu-button"
						color="inherit"
						aria-label="menu"
						onClick={() => setIsDrawerVisible(true)}
						edge="end"
					>
						<MenuIcon />
					</IconButton>
				</Hidden>
				<LeftDrawer
					isVisible={isDrawerVisible}
					onOpen={() => setIsDrawerVisible(true)}
					onClose={() => setIsDrawerVisible(false)}
				/>
			</Toolbar>
			<Img
				className="header__hero-img"
				style={{ position: 'absolute', }}
				fluid={data.heroImage.childImageSharp.fluid}
			/>
		</div>
	)
}

Header.propTypes = propTypes;

export default Header;
