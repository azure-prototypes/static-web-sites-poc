import React from 'react';

import { Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import PropTypes from 'prop-types';

import {
	Button, Dropdown, Modal, TextInput,
} from 'components';

import { RuleFieldNames as fieldNames, RuleTypeNames } from '../../constants';
import TierInputs from '../TierInputs';
import { useRuleForm } from './useRuleForm';

const RuleForm = (props) => {
	const {
		errorMessage, successMessage, open, isCreate,
	} = props;
	const {
		fields,
		ruleTypeOptions,
		hierarchyLevelsOptions,
		onFieldChange,
		onInnerSubmit,
		hasError,
		onInnerClose,
	} = useRuleForm(props);

	return (
		<Modal
			maxWidth={680}
			open={open}
			onClose={onInnerClose}
			title={isCreate ? 'Add Rule' : 'Edit Rule'}
			footer={
				<Box display="flex" flexDirection="row" justifyContent="flex-end" p={2}>
					<Box mr={2}>
						<Button variant="outlined" onClick={onInnerClose}>
							Discard
						</Button>
					</Box>
					<Button green onClick={onInnerSubmit}>
						Save Rule
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
					disabled={!isCreate}
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
						error={hasError(fieldNames.ruleType)}
						required
						fullWidth
						options={ruleTypeOptions}
						label="Rule Type"
						variant="outlined"
						value={fields[fieldNames.ruleType]}
						onChange={onFieldChange(fieldNames.ruleType)}
					/>
				</Box>
				<Box mb={2}>
					<Dropdown
						disabled={!isCreate}
						error={hasError(fieldNames.hierarchyLevel)}
						required
						fullWidth
						options={hierarchyLevelsOptions}
						label="Hierarchy Level"
						variant="outlined"
						value={fields[fieldNames.hierarchyLevel]}
						onChange={onFieldChange(fieldNames.hierarchyLevel)}
					/>
				</Box>
				{fields[fieldNames.ruleType] === RuleTypeNames.TIER && (
					<TierInputs
						fields={fields}
						hasError={hasError}
						isCreate={isCreate}
						onFieldChange={onFieldChange}
					/>
				)}
			</Box>
		</Modal>
	);
};

RuleForm.propTypes = {
	isCreate: PropTypes.bool,
	open: PropTypes.bool,
	onClose: PropTypes.func,
	fieldsData: PropTypes.object,
	errorMessage: PropTypes.string,
	successMessage: PropTypes.string,
	onSubmit: PropTypes.func,
};

export default RuleForm;
