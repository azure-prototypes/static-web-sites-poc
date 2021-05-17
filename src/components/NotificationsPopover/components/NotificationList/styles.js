import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
	root: {},
	listItem: {
		'&:hover': {
			backgroundColor: theme.palette.background.default,
		},
	},
}));
