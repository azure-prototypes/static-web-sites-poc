import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBarSpacer: theme.mixins.toolbar,
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	content: {
		width: '100%',
	},
}));
