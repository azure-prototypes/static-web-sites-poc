import React from 'react';

import {
	Box, FormControlLabel, Radio, RadioGroup, Typography,
} from '@material-ui/core';
import { GetApp, Publish } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';

import { Button, Dropdown, Modal } from 'components';

import { countryOptions } from './constants';
import { styles } from './styles';
import { useExportPriceLists } from './useExportPriceLists';

const ExportPriceLists = () => {
	const {
		message,
		isSuccess,
		country,
		onCountryChange,
		onInnerClose,
		onSubmit,
		isOpen,
		onOpen,
	} = useExportPriceLists();

	const classes = styles();

	return (
		<Box display="flex" flexDirection="row" mb={2} mt={1}>
			<Button
				component="label"
				disabled
			>
				<Publish />
        Import
			</Button>
			<Box ml={3}>
				<Button
					onClick={onOpen}
					component="label"
				>
					<GetApp />
          Export
				</Button>
			</Box>
			<Modal
				maxWidth={680}
				open={isOpen}
				onClose={onInnerClose}
				title='Export price lists'
				footer={
					<Box display="flex" flexDirection="row" justifyContent="flex-end" p={2}>
						<Box mr={2}>
							<Button variant="outlined" onClick={onInnerClose}>
                Discard
							</Button>
						</Box>
						<Button green onClick={onSubmit}>
              Export price lists
						</Button>
					</Box>
				}>
				<Box display="flex" flexDirection="column" mb={2}>
					{message && (
						<Box mb={3}>
							<Alert severity={isSuccess ? 'success' : 'error'}>{message}</Alert>
						</Box>
					)}
					 <Box mb={2} mt={2}>
						<Dropdown
							required
							fullWidth
							options={[{ value: 'baco', label: 'BACO' }]}
							label="Export to"
							variant="outlined"
							value={'baco'}
						/>
					 </Box>
					 <Typography variant="overline">Country to export</Typography>
					 <RadioGroup
						className={classes.radioGroup}
						value={country}
						onChange={onCountryChange}>
						{countryOptions.map((option) => {
							const { value, label } = option;
							return (
								<FormControlLabel
									key={value}
									value={value}
									label={label}
									control={<Radio />}
								/>
							);
						})}
					 </RadioGroup>
				</Box>
			</Modal>
		</Box>
	);
};

export default ExportPriceLists;
