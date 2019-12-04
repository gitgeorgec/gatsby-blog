import React, { useState, useEffect, } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { Link, graphql, } from "gatsby";
import Img from 'gatsby-image';
import SEO from "../components/seo";
import Layout from '../components/layout';
import TabPanel from '../components/tab-panel';
import SlideAnimate from '../components/slide-animate';
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

const propTypes = {
	data: PropTypes.object,
};

const IndexPage = ({ data }) => {
	const blogImageFliud = Rpath(['blogImage', 'childImageSharp', 'fluid'], data);
	const aboutImageFliud = Rpath(['aboutImage', 'childImageSharp', 'fluid'], data);
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	useEffect(() => {
		const body = document.querySelector('body');

		function scroll () {
			return console.log('scroll')
		}

		// function addEvent () {
			body.addEventListener('wheel', scroll)
		// }

		// addEvent()
		return function clearEvent () {
			body.removeEventListener('click', scroll)
		}
	}, [])

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
					className={`${PREFIX_CLASS}__blog-tab`}
				>
					<Tab icon={<MenuBookOutlinedIcon />} {...a11yProps(0)}/>
					<Tab icon={<PersonPinIcon />} {...a11yProps(1)}/>
				</Tabs>
				<TabPanel value={value} index={0}>
					<div className={cx(`${PREFIX_CLASS}__blog-tab-panel`)}>
						<SlideAnimate className={cx(`${PREFIX_CLASS}__img-slide`, "background-color-5")}>
							<Img fluid={blogImageFliud} />
						</SlideAnimate>
						<Link to={"/blog"} className={cx(`${PREFIX_CLASS}__link`)}>
							<div>Blog</div>
						</Link>
					</div>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<div className={cx(`${PREFIX_CLASS}__about-tab-panel`, {
						[`${PREFIX_CLASS}__about-tab-panel--active`]: value === 1
					})}>
						<SlideAnimate
							className={cx(`${PREFIX_CLASS}__img-slide`, "background-color-5")}
							slideDirection="down"
						>
							<Img fluid={aboutImageFliud}/>
						</SlideAnimate>
						<Link to={"/about"} className={cx(`${PREFIX_CLASS}__link`)}>
							<div>About</div>
						</Link>
					</div>
				</TabPanel>
			</main>
		</Layout>
	)
}

IndexPage.propTypes = propTypes;

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
		aboutImage: file(relativePath: { eq: "about.jpg" }) {
			childImageSharp {
				fluid (maxWidth: 600) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
