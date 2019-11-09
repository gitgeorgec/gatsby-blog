import React from 'react';
import {
	Container,
	Typography,

} from "@material-ui/core";

const Footer = () => {
	return (
		<footer>
			<Container maxWidth="lg">
				<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
					Something here to give the footer a purpose!
				</Typography>
				<Typography variant="body2" color="textSecondary" align="center">
					© 2019, Built with
					{` `}
					<a href="https://www.gatsbyjs.org">Gatsby</a>
				</Typography>
			</Container>
		</footer>
	)
}

export default Footer;
