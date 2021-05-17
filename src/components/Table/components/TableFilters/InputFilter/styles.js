import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
	},
	input: {
		flexGrow: 1,
		height: 42,
		padding: theme.spacing(0, 2),
		display: 'flex',
		alignItems: 'center',
	},
}));
