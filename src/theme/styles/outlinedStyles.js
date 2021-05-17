const outlinedStyles = {
	root: {
		'& label.Mui-focused': {
			color: '#263238',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: '#eeeeee',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#eeeeee',
				borderWidth: 1,
			},
		},
		'& .MuiOutlinedInput-root:hover fieldset': {
			borderColor: '#eeeeee',
		},
	},
};

export default outlinedStyles;
