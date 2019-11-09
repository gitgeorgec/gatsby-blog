import React from 'react';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
	Container,
	CssBaseline,
} from '@material-ui/core';
import Header from '../header';
import Footer from '../footer';

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
			<CssBaseline />
			<Header
				title={data.site.siteMetadata.title}
			/>
			<Container maxWidth="lg">
				{children}
				<Footer />
			</Container>
		</React.Fragment>
	)
}

Layout.propTypes = propTypes;

export default Layout;
