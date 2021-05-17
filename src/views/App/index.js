import * as React from 'react';

import MomentUtils from '@date-io/moment';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from '../../theme';
import Dashboard from './layouts/Dashboard';
import { styles } from './styles';

export const App = () => {
	const classes = styles();

	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<ThemeProvider theme={theme}>
				<Router>
					<div className={classes.root}>
						<CssBaseline />
						<Dashboard />
					</div>
				</Router>
			</ThemeProvider>
		</MuiPickersUtilsProvider>
	);
};
