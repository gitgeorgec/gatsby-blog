import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {
	Paper,
} from '@material-ui/core';

const BlogTemplate = ({ data, id }) => {
	const { mdx } = data;
	const { frontmatter, body, } = mdx
	const { title, } = frontmatter;

	return (
		<Layout>
			<SEO title={title}/>
			<main style={{ maxWidth: 960, margin: '0 auto',}}>
				<Paper style={{ padding: 20, minHeight: '100vh', }} className="blog">
					<MDXRenderer>{body}</MDXRenderer>
				</Paper>
				<Link to={frontmatter.path}>hihi</Link>
			</main>
		</Layout>
	)
}

export default BlogTemplate;

export const pageQuery = graphql`
	query BlogPostQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				title
			}
		}
	}
`
