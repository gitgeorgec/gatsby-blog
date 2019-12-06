import React from 'react';
import { graphql, Link, } from 'gatsby';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import SlideAnimate from '../components/slide-animate';
import SEO from '../components/seo';
import Paper from '@material-ui/core/Paper';
import Rpath from 'ramda/src/path';

const propTypes = {
	data: PropTypes.object,
	pageContext: PropTypes.object,
};

const BlogTemplate = ({ data, pageContext, }) => {
	const title = Rpath(['mdx', 'frontmatter', 'title'], data);
	const date = Rpath(['mdx', 'frontmatter', 'date'], data);
	const body = Rpath(['mdx', 'body'], data);
	const { previous, next } = pageContext

	function _renderLink(node) {
		if (node) {
			const path = Rpath(['node', 'frontmatter', 'path'], node);
			const title = Rpath(['node', 'frontmatter', 'title'], node);
			console.log(node)

			return <Link to={path}>{title}</Link>
		}

		return null;
	}

	return (
		<Layout>
			<SEO title={title}/>
			<main style={{ maxWidth: 960, margin: '0 auto',}}>
				<Link to={'/blog'}>back to blog list</Link>
				<SlideAnimate slideDirection="down" className="background-color-5">
					<Paper style={{ padding: 20, minHeight: '100vh', }} className="blog">
						<h1>{title}</h1>
						<p>{date}</p>
						<MDXRenderer>{body}</MDXRenderer>
					</Paper>
				</SlideAnimate>
				<div style={{ display: 'flex', justifyContent: 'space-between'}}>
					<div>{_renderLink(previous)}</div>
					<div>{_renderLink(next)}</div>
				</div>
			</main>
		</Layout>
	)
}

BlogTemplate.propTypes = propTypes;

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
