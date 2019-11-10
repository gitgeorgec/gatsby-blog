import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import {
	Grid,
	Typography,
	Paper,
	Container,
	Hidden
} from '@material-ui/core';
import Img from 'gatsby-image';
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
	console.log(data)
	const _renderNewestPost = () => {
		return [1,2,3].map(data => {
			return (
				<Grid item xs={12} md={4} key={Math.random().toString}>
					<Paper>
						<Typography variant="h5" component="h3">
							This is a sheet of paper.
						</Typography>
						<Typography component="p">
							Paper can be used to build surface or other elements for your application.
						</Typography>
					</Paper>
				</Grid>
			)
		})
	}
	return (
		<Layout>
			<SEO title="Home" />
			<main>
				<Hidden xsDown>
					<Img
						fluid={data.heroImage.childImageSharp.fluid}
					/>
				</Hidden>
				<Container maxWidth="lg">
					<Grid container spacing={5}>
						{_renderNewestPost()}
					</Grid>
				</Container>
			</main>
			<Link to="/page-2/">Go to page 2</Link>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query {
		heroImage: file(relativePath: { eq: "mac-book.jpg" }) {
			childImageSharp {
				fluid (maxWidth: 1680) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
