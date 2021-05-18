import { InputBase, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
	paper: {
		height: 42,
		padding: theme.spacing(0, 2),
		display: 'flex',
		alignItems: 'center',
	},
	label: {
		width: '100%',
	},
}));

export const InputStyle = withStyles(() => ({
	input: {
		'&:focus': {
			backgroundColor: 'transparent',
		},
	},
}))(InputBase);
