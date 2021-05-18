import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
	greenButton: {
		color: theme.palette.white,
		backgroundColor: colors.green[600],
		'&:hover': {
			backgroundColor: colors.green[900],
		},
	},
	smallButton: {
		border: `1px solid ${theme.palette.black}`,
		fontSize: 13,
	},
}));
