import React from 'react';

import { Paper, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { styles } from './styles';
import { useSearch } from './useSearch';

const Search = (props) => {
	const {
		onSearch, className, placeholder, ...rest
	} = props;
	const { onInnerSearch } = useSearch(onSearch);

	const classes = styles();

	return (
		<div {...rest} className={clsx(classes.root, className)}>
			<Paper className={classes.search} elevation={1}>
				<SearchIcon className={classes.searchIcon} />
				<Input
					className={classes.searchInput}
					onChange={onInnerSearch}
					disableUnderline
					placeholder={placeholder}
				/>
			</Paper>
		</div>
	);
};

Search.propTypes = {
	className: PropTypes.string,
	onSearch: PropTypes.func,
	placeholder: PropTypes.string,
};

Search.defaultProps = {
	placeholder: 'Search',
};

export default Search;
