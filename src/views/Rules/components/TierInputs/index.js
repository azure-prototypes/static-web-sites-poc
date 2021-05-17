import React from 'react';

import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Dropdown, TextInput } from 'components';
import { COUNTRIES } from 'constants/countries';

import { RuleFieldNames as fieldNames } from '../../constants';
import { useTierInputs } from './useTierInputs';

const TierInputs = (props) => {
	const {
		hasError, isCreate, onFieldChange, fields,
	} = props;

	const { priceLists } = useTierInputs(onFieldChange, fields);
	return (
		<>
			{isCreate && (
				<>
					<Dropdown
						disabled={!isCreate}
						error={hasError(fieldNames.priceList)}
						required
						fullWidth
						options={priceLists}
						label="Price list"
						variant="outlined"
						value={fields[fieldNames.priceList]}
						onChange={onFieldChange(fieldNames.priceList)}
					/>
					<Box mb={2} mt={2}>
						<TextInput
							disabled
							label="Country"
							fullWidth
							value={COUNTRIES[fields[fieldNames.country]]}
							onChange={onFieldChange(fieldNames.country)}
						/>
					</Box>
				</>
			)}
			<TextInput
				label="Value"
				fullWidth
				value={fields[fieldNames.value]}
				onChange={onFieldChange(fieldNames.value)}
			/>
		</>
	);
};

TierInputs.propTypes = {
	fields: PropTypes.object,
	isCreate: PropTypes.bool,
	hasError: PropTypes.func,
	onFieldChange: PropTypes.func,
};

export default TierInputs;
