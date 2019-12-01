import React from 'react'
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import {
	Grid,
	Typography,
	Container,
} from '@material-ui/core';
import SEO from "../components/seo";
import Rpath from 'ramda/src/path';
import { Link } from "gatsby";

const IndexPage = ({ data }) => {
	const mdxEdges = Rpath(['allMdx', 'edges'], data);

	return (
		<Layout>
			<SEO title="ABOUT" />
			<main>
				ABOUT
			</main>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query {
		allMdx {
			edges {
				node {
					id
					frontmatter {
						path
						date(locale: "")
						title
					}
				}
			}
		}
	}
`
