import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(() => ({
	root: {
		width: 350,
		maxWidth: '100%',
	},
	actions: {
		backgroundColor: colors.grey[50],
		justifyContent: 'center',
	},
}));
