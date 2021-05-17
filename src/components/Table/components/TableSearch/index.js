import React from 'react';

import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';

import { SearchBar } from 'components';

import { styles } from './styles';

const TableSearch = (props) => {
	const classes = styles();
	const { searchTitle, onSearch } = props;

	return searchTitle ? (
		<Box className={classes.root}>
			<SearchBar placeholder={searchTitle} onSearch={onSearch} />
		</Box>
	) : null;
};

TableSearch.propTypes = {
	searchTitle: PropTypes.string,
	onSearch: PropTypes.func,
};

export default TableSearch;
