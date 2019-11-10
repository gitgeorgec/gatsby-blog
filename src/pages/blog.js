import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import {
	Grid,
	Typography,
	Paper,
} from '@material-ui/core';
import SEO from "../components/seo"

const IndexPage = () => {
	const _renderAllPost = () => {
		return [1,2,3].map(data => {
			return (
				<Grid item xs={12} md={4} key={Math.random().toString}>
					<Paper>
						<Typography variant="h5">
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
			<SEO title="Blog" />
			<main>
				<Grid container spacing={5}>
					{_renderAllPost()}
				</Grid>
			</main>
			<Link to="/page-2/">Go to page 2</Link>
		</Layout>
	)
}

export default IndexPage
