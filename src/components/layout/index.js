import React from 'react';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from '../header';
import Footer from '../footer';
import './style.sass';

const propTypes = {
	children: PropTypes.node.isRequired,
}

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
		site {
			siteMetadata {
			title
			}
		}
		}
	`)

	return (
		<React.Fragment>
			<Header
				title={data.site.siteMetadata.title}
			/>
				{children}
			<Footer />
		</React.Fragment>
	)
}

Layout.propTypes = propTypes;

export default Layout;
