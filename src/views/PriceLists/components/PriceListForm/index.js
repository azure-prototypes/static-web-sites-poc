import React from 'react';

import {
	Box,
	FormControlLabel,
	Radio,
	RadioGroup,
	Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import moment from 'moment';
import PropTypes from 'prop-types';

import {
	TextInput, Dropdown, DatePicker, Modal, Button,
} from 'components';

import { PriceListFieldNames as fieldNames } from '../../constants';
import { styles } from './styles';
import { usePriceListForm } from './usePriceListForm';

const PriceListForm = (props) => {
	const {
		errorMessage, successMessage, open, isCreate,
	} = props;

	const {
		fields,
		onFieldChange,
		typeOptions,
		countryOptions,
		basePriceListsOptions,
		hideBasePriceList,
		onInnerSubmit,
		hasError,
		onInnerClose,
	} = usePriceListForm(props);
	const classes = styles();

	return (
		<Modal
			maxWidth={680}
			open={open}
			onClose={onInnerClose}
			title={isCreate ? 'Add Price List' : 'Edit Price List settings'}
			footer={
				<Box display="flex" flexDirection="row" justifyContent="flex-end" p={2}>
					<Box mr={2}>
						<Button variant="outlined" onClick={onInnerClose}>
							Discard
						</Button>
					</Box>
					<Button green onClick={onInnerSubmit}>
						{isCreate ? 'Add Price List' : 'Save Price List'}
					</Button>
				</Box>
			}>
			<Box display="flex" flexDirection="column">
				{errorMessage && (
					<Box mb={3}>
						<Alert severity="error">{errorMessage}</Alert>
					</Box>
				)}
				{successMessage && (
					<Box mb={3}>
						<Alert severity="success">{successMessage}</Alert>
					</Box>
				)}
				<TextInput
					error={hasError(fieldNames.name)}
					label="Name"
					fullWidth
					required
					value={fields[fieldNames.name]}
					onChange={onFieldChange(fieldNames.name)}
				/>
				<Box mb={2} mt={2}>
					<Dropdown
						disabled={!isCreate}
						error={hasError(fieldNames.type)}
						required
						fullWidth
						options={typeOptions}
						label="Price List Type"
						variant="outlined"
						value={fields[fieldNames.type]}
						onChange={onFieldChange(fieldNames.type)}
					/>
				</Box>
				<Box mb={2}>
					<TextInput
						disabled={!isCreate}
						label="Effort code"
						error={hasError(fieldNames.effortCode)}
						fullWidth
						required
						value={fields[fieldNames.effortCode]}
						onChange={onFieldChange(fieldNames.effortCode)}
					/>
				</Box>
				{!hideBasePriceList && (
					<Box mb={2}>
						<Dropdown
							helpText={
								<div>
The selected country doesn&apos;t have an OFP yet, so there&apos;s no base price list to select.
Please {'\n'}make sure an OFP is created. Alternatively select another price list type or country instead
								</div>
							}
							disabled={!isCreate}
							error={hasError(fieldNames.basePriceListId)}
							required
							fullWidth
							options={basePriceListsOptions}
							label="Base price list"
							variant="outlined"
							value={fields[fieldNames.basePriceListId]}
							onChange={onFieldChange(fieldNames.basePriceListId)}
						/>
					</Box>
				)}
				<Typography variant="overline">Countries</Typography>
				<RadioGroup
					className={classes.radioGroup}
					value={fields[fieldNames.country]}
					onChange={onFieldChange(fieldNames.country)}>
					{countryOptions.map((country) => {
						const { value, label } = country;
						return (
							<FormControlLabel
								key={value}
								value={value}
								control={<Radio disabled={!isCreate} />}
								label={label}
							/>
						);
					})}
				</RadioGroup>
				<Box mt={3} mb={2}>
					<Typography variant="overline">Time Period</Typography>
					<Box display="flex" flexDirection="row" mt={2}>
						<Box pr={1} flex={1}>
							<DatePicker
								disabled={!isCreate}
								error={hasError(fieldNames.startDate)}
								label="Start Date"
								required
								fullWidth
								value={fields[fieldNames.startDate]}
								onChange={onFieldChange(fieldNames.startDate)}
							/>
						</Box>
						<Box pl={1} flex={1}>
							<DatePicker
								disabled={!isCreate}
								error={hasError(fieldNames.endDate)}
								required
								fullWidth
								minDate={moment(fields[fieldNames.startDate]).add(1, 'days')}
								label="End Date"
								value={fields[fieldNames.endDate]}
								onChange={onFieldChange(fieldNames.endDate)}
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		</Modal>
	);
};

PriceListForm.propTypes = {
	isCreate: PropTypes.bool,
	open: PropTypes.bool,
	onClose: PropTypes.func,
	fieldsData: PropTypes.object,
	errorMessage: PropTypes.string,
	successMessage: PropTypes.string,
	onSubmit: PropTypes.func,
};

export default PriceListForm;
