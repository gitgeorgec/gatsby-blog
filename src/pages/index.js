import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { Link, } from "gatsby";
import Img from 'gatsby-image';
import SEO from "../components/seo";
import Layout from '../components/layout';
import TabPanel from '../components/tab-panel';
import Rpath from 'ramda/src/path';
import cx from 'classnames';
import './index.sass';

const PREFIX_CLASS = 'index-page';

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const IndexPage = ({ data }) => {
	const blogImageFliud = Rpath(['blogImage', 'childImageSharp', 'fluid'], data);
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Layout>
			<SEO title="Home" />
			<main className={PREFIX_CLASS}>
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={value}
					onChange={handleChange}
					aria-label="Vertical tabs example"
				>
					<Tab icon={<PhoneIcon />} {...a11yProps(0)}/>
					<Tab icon={<PersonPinIcon />} {...a11yProps(1)}/>
				</Tabs>
				<TabPanel value={value} index={0}>
					<div className={cx(`${PREFIX_CLASS}__blog-tab-panel`, {
						[`${PREFIX_CLASS}__blog-tab-panel--active`]: value === 0
					})}>
						<Img
							fluid={blogImageFliud}
						/>
						<Link to={"/blog"}>
							<div>Blog</div>
						</Link>
					</div>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Link to={"/about"}>
						About
					</Link>
				</TabPanel>
			</main>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query {
		blogImage: file(relativePath: { eq: "blog.jpeg" }) {
			childImageSharp {
				fluid (maxWidth: 600) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
