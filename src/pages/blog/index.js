import React from 'react'
import Proptypes from 'prop-types';
import Layout from '../../components/layout';
import PostCard from '../../components/post-card';
import SlideAnimate from '../../components/slide-animate';
import {
	Grid,
	Typography,
	Container,
} from '@material-ui/core';
import SEO from "../../components/seo";
import Rpath from 'ramda/src/path';
import { navigate, graphql } from "gatsby";

const propTypes = {
	data: Proptypes.object,
};

const BlogIndexPage = ({ data }) => {
	const mdxEdges = Rpath(['allMdx', 'edges'], data);

	const _renderNewestPost = () => {
		return mdxEdges.map((edge, index) => {
			const id = Rpath(['node', 'id'], edge);
			const frontmatter = Rpath(['node', 'frontmatter',], edge);
			const title = Rpath(['node', 'frontmatter', 'title'], edge);
			const date = Rpath(['node', 'frontmatter', 'date'], edge);
			const excerpt = Rpath(['node', 'excerpt'], edge);

			return (
				<Grid item xs={12} key={id}>
					<SlideAnimate
						slideDirection={ index%2 === 1 ? 'left' : 'right'}
						className="background-color-5"
					>
						<PostCard
							data={{
								title,
								content: excerpt,
								date
							}}
							onClick={() => navigate(frontmatter.path)}
						/>
					</SlideAnimate>
				</Grid>
			)
		})
	}
	return (
		<Layout>
			<SEO title="Blog" />
			<main style={{
				maxWidth: 960,
				margin: '0px auto',
			}}>
				<Container maxWidth="lg">
					<Typography variant="h4" component="h4">
						BLOG LIST
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
		allMdx(sort: {fields: frontmatter___date, order: DESC}) {
			edges {
				node {
					id
					frontmatter {
						path
						date
						title
					}
					excerpt(pruneLength: 50)
				}
			}
		}
	}
`
