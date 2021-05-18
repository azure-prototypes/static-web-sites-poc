import React from 'react';

import { Box } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import {
	Table, PageTitle, UploadButton, Button, Alert,
} from 'components';
import { ORDER_DIRECTION } from 'constants/table';

import CreatePriceList from '../CreatePriceList';
import UploadProgress from './components/ImportProgress';
import { styles } from './styles';
import { tableConfig } from './tableConfig';
import { usePriceLists } from './usePriceLists';

const PriceLists = () => {
	const {
		getPriceLists,
		isOpen,
		onOpen,
		onClose,
		onFileChange,
		file,
		onPriceListClick,
		onSuccessImport,
		setSelectedLists,
		onPublishClick,
		messageVisible,
		closeMessage,
		messageData,
	} = usePriceLists();
	const { tabsOptions, columns } = tableConfig(onPriceListClick);
	const classes = styles();

	return (
		<Box className={classes.root}>
			<Box
				display="flex"
				flexDirection="row"
				justifyContent="space-between"
				marginBottom={2}>
				<PageTitle>Price Lists</PageTitle>
				<Box display="flex" flexDirection="row">
					<Box mr={2}>
						<UploadButton title='Upload new price list' onChange={onFileChange} />
					</Box>
					<Box>
						<Button color="secondary" onClick={onOpen} variant="contained">
							<Add />
							Add new price list
						</Button>
					</Box>
				</Box>
			</Box>
			{messageVisible && <Box my={2}>
				<Alert
					open={messageVisible}
					onClose={closeMessage}
					message={messageData.text} severity={messageData.type} autoHideDuration={6000}/>
			</Box> }
			{ file && <UploadProgress file={file} onSuccess={onSuccessImport} /> }
			<Table
				columns={columns}
				options={{
					searchTitle: 'Search price list',
					tabs: true,
					selection: true,
					initialSort: {
						direction: ORDER_DIRECTION.desc,
						column: 'active',
					},
					onSelection: setSelectedLists,
					tableActions: (
						<Button
							variant="contained"
							small
							onClick={onPublishClick}>
							Publish
						</Button>
					),
				}}
				filterTabs={{
					tabs: tabsOptions,
				}}
				data={(query) => getPriceLists(query)}
			/>
			<CreatePriceList onClose={onClose} open={isOpen} />
		</Box>
	);
};

export default PriceLists;
