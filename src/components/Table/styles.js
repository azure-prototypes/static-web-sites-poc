import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
	root: {},
	content: {
		padding: 0,
	},
	table: {
		tableLayout: 'fixed',
	},
	nameCell: {
		display: 'flex',
		alignItems: 'center',
	},
	actions: {
		padding: theme.spacing(1),
		justifyContent: 'flex-end',
	},
}));
