import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import InsertEmoticonSharpIcon from '@material-ui/icons/InsertEmoticonSharp';
import './style.sass';

const propTypes = {
	title: PropTypes.string
}

const Header = ({title}) => {
	return (
		<div className="header">
			<Link to='/' className="header-link">
				<InsertEmoticonSharpIcon/>
				<span>{title}</span>
			</Link>
		</div>
	)
}

Header.propTypes = propTypes;

export default Header;
