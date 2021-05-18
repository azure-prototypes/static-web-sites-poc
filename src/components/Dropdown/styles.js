import { Select, MenuItem, withStyles } from '@material-ui/core';

export const StyledSelect = withStyles(() => ({
	root: {},
	select: {
		'&:focus': {
			backgroundColor: 'transparent',
		},
	},
}))(Select);

export const StyledMenuItem = withStyles(() => ({
	root: {
		'& .MuiListItem-root, &.Mui-disabled ': {
			whiteSpace: 'break-spaces',
			opacity: 1,
		},
	},
}))(MenuItem);
