import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
	filterCell: {
		paddingLeft: 8,
		top: 52,
		left: 0,
		zIndex: 2,
		position: 'sticky',
		backgroundColor: theme.palette.background.default,
	},
	actions: {
		height: 58,
	},
}));
