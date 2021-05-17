import { makeStyles } from '@material-ui/core';

export const styles = makeStyles((theme) => ({
	root: {
		width: (props) => props.maxWidth || 960,
	},
	header: {
		padding: theme.spacing(3),
		margin: '0 auto',
	},
	icon: {
		cursor: 'pointer',
	},
	content: {
		padding: theme.spacing(0, 2),
		maxWidth: 720,
		margin: '0 auto',
	},
}));
