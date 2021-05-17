import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
	root: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		overflow: 'hidden',
	},
	container: {
		marginTop: 64,
		display: 'flex',
		flex: '1 1 auto',
	},
	navBar: {
		marginTop: 2,
		zIndex: 3,
		width: 256,
		minWidth: 256,
		flex: '0 0 auto',
	},
	content: {
		padding: 1,
		marginLeft: 256,
		overflowY: 'auto',
		flex: '1 1 auto',
	},
}));
