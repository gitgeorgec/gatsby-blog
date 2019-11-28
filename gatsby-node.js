const path = require('path');
const { createFilePath } = require("gatsby-source-filesystem");

// exports.onCreateNode = ({ node, actions, getNode }) => {
// 	const { createNodeField } = actions

// 	if (node.internal.type === "Mdx") {
// 		const value = createFilePath({ node, getNode })

// 		createNodeField({
// 			name: "slug",
// 			node,
// 			value: `/blog${value}`,
// 		})
// 	}
// }

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;
	const result = await graphql(`
		query {
			allMdx {
				edges {
					node {
						id
						frontmatter {
							path
						}
					}
				}
			}
		}
	`)

	if (result.errors) {
		reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
	}

	const posts = result.data.allMdx.edges;

	posts.forEach(({ node }, index) => {
		console.log(node)
		createPage({
			path: node.frontmatter.path,
			// This component will wrap our MDX content
			component: path.resolve(`./src/templates/blog-template.js`),
			// You can use the values in this context in
			// our page layout component
			context: { id: node.id },
		})
	})
}
