import React from 'react';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip'
import { Field, reduxForm } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import './DiceModuleForm.css';

function CoCModTooltip() {
	const key = 'CoCModTooltip';
	return (
		<>
		<OverlayTrigger
			key={key}
			placement="bottom"
			overlay={
				<Tooltip id={`tooltip-${key}`}>
					<span>Will open modal with additional options on the <strong>d100</strong> roll.</span>
				</Tooltip>
			}
		><FontAwesomeIcon icon={faQuestionCircle} className="icon-info" />
		</OverlayTrigger>
		</>
	);
}

const cocModeLabel = (
	<span>Call of Cthulhu 7e Mode <CoCModTooltip/></span>
);

const warhammer4eModeLabel = (
	<span>Warhammer 4e Mode</span>
);

// @ts-ignore
const createRenderer = render  => ({ input, meta, label, id }, ...rest) => {
	return (
		<>
			{ render(input, label, id, rest )}
		</>
	);
};

// @ts-ignore
const RenderCheckbox = createRenderer((input, label, id) =>
	<Form.Check type="checkbox" label={label} id={id} custom {...input} />
);

function DiceModuleForm(props:any) {
	const { handleSubmit, pristine, reset, submitting } = props
	return (
		<Form id ="roll-options-form" className="dice-module dice-form">
			<Field
				name="keepHighest"
				id="keepHighest"
				label="Keep highest"
				component={RenderCheckbox}
			/>
			<Field
				name="keepLowest"
				id="keepLowest"
				label="Keep lowest"
				component={RenderCheckbox}
			/>
			<Field
				name="sumResults"
				id="sumResults"
				label="Sum results"
				component={RenderCheckbox}
			/>
			<Field
				name="useModifier"
				id="useModifier"
				label="Add modifier"
				component={RenderCheckbox}
			/>
			<Field
				name="cocMode"
				id="cocMode"
				label={cocModeLabel}
				component={RenderCheckbox}
			/>
			<Field
				name="warhammer4eMode"
				id="warhammer4eMode"
				label={warhammer4eModeLabel}
				component={RenderCheckbox}
			/>
		</Form>
	);
}


export default reduxForm({
	form: 'rollOptionsForm'
})(DiceModuleForm);