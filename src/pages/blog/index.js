import React from 'react'
import Proptypes from 'prop-types';
import Layout from '../../components/layout';
import PostCard from '../../components/post-card';
import {
	Grid,
	Typography,
	Container,
} from '@material-ui/core';
import SEO from "../../components/seo";
import Rpath from 'ramda/src/path';
import { navigate, graphql } from "gatsby";
import './blog.sass'

const propTypes = {
	data: Proptypes.object,
};

const BlogIndexPage = ({ data }) => {
	const mdxEdges = Rpath(['allMdx', 'edges'], data);

	const _renderNewestPost = () => {
		return mdxEdges.map(edge => {
			const id = Rpath(['node', 'id'], edge);
			const frontmatter = Rpath(['node', 'frontmatter',], edge);
			const title = Rpath(['node', 'frontmatter', 'title'], edge);
			const date = Rpath(['node', 'frontmatter', 'date'], edge);

			return (
				<Grid item xs={12} key={id}>
					<PostCard
						data={{
							title,
							content: title,
							date
						}}
						onClick={() => navigate(frontmatter.path)}
					/>
				</Grid>
			)
		})
	}
	return (
		<Layout>
			<SEO title="Home" />
			<main style={{
				maxWidth: 960,
				margin: '0px auto',
			}}>
				<Container maxWidth="lg">
					<Typography variant="h5" component="h5">
						BLOG List
					</Typography>
					<Grid container spacing={1}>
						{_renderNewestPost()}
					</Grid>
				</Container>
			</main>
		</Layout>
	)
}

BlogIndexPage.propTypes = propTypes;

export default BlogIndexPage

export const query = graphql`
	query {
		allMdx {
			edges {
				node {
					id
					frontmatter {
						path
						date
						title
					}
				}
			}
		}
	}
`
