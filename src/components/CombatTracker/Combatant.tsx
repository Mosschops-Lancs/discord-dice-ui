import React from "react";
import Draggable from 'react-draggable';
import classNames from "classnames";
import styles from './Combatant.module.css';
import useCombatTrackerStore, { CombatantTypes, CombatantTypesEditableFields } from "./store";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCopy } from "@fortawesome/free-regular-svg-icons";
import { faGripHorizontal, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

interface InputProps {
	value: string | number;
	classname?: string;
	name: string;
	// onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onChange?: (event: any) => void;
	placeholder?: string;
	disabled?: boolean;
}

function Input ({
	value,
	classname,
	name,
	onChange,
	placeholder = '',
	disabled = false
}: InputProps) {
	return (
		<input
			className={classNames([styles.input, classname])}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			disabled={disabled}
		/>
	);
}

function TextArea ({
	value,
	classname,
	name,
	onChange,
	placeholder = '',
	disabled = false
}: InputProps) {
	return (
		<textarea
			className={classNames([styles.input, classname])}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			disabled={disabled}
		/>
	);
}

export default function Combatant({
	name,
	hp,
	initiative,
	wounds,
	conditions,
	id,
	zoneIndex,
	isLocked,
	hpMax
}: CombatantTypes) {
	const setIsDragging = useCombatTrackerStore(({ setIsDragging }) => setIsDragging);
	const setCombatantZone = useCombatTrackerStore(({ setCombatantZone }) => setCombatantZone);
	const forceUpdateCombatants = useCombatTrackerStore(({ forceUpdateCombatants }) => forceUpdateCombatants);
	const deleteCombatant = useCombatTrackerStore(({ deleteCombatant }) => deleteCombatant);
	const cloneCombatant = useCombatTrackerStore(({ cloneCombatant }) => cloneCombatant);
	const updateCombatant = useCombatTrackerStore(({ updateCombatant }) => updateCombatant);
	const lockCombatant = useCombatTrackerStore(({ lockCombatant }) => lockCombatant);
	const hoverZone = useCombatTrackerStore(({ hoverZone }) => hoverZone);

	const handleStart = () => {
		setIsDragging(true);
	};
	const handleStop = () => {
		setIsDragging(false);

		if (hoverZone === null || zoneIndex === hoverZone) {
			forceUpdateCombatants()
		} else {
			setCombatantZone(id, hoverZone);
		}
	};

	const handleDelete = () => {
		deleteCombatant(id);
	};

	const handleClone = () => {
		cloneCombatant(id);
	};

	const handleLock = () => {
		lockCombatant(id);
	};

	const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
		updateCombatant(
			id,
			event.target.name as CombatantTypesEditableFields,
			event.target.value
		);
	};

	return (
		<Draggable
			handle=".handle"
			onStart={handleStart}
			onStop={handleStop}
		>
			<div className={styles.container}>
				<div className={styles.table}>
					<div className={classNames({
						[styles.cell]: true,
						[styles.dragHandle]: true,
						"handle": true
					})}>
						<FontAwesomeIcon
							icon={faGripHorizontal}
						/>
					</div>
					<div className={styles.cell}>
						<Input
							value={initiative}
							name="initiative"
							onChange={handleUpdate}
							classname={styles.initiativeInput}
						/>
					</div>
					<div className={styles.cell}>
						<div className={styles.nameRow}>
							<Input
								value={name}
								name="name"
								onChange={handleUpdate}
								classname={styles.nameInput}
							/>
						</div>
						<div className={styles.nameRow}>
							<TextArea
								value={conditions}
								name="conditions"
								onChange={handleUpdate}
								classname={styles.textarea}
								placeholder="Conditions"
							/>
						</div>
					</div>
					<div className={styles.cell}>
						<div className={styles.hpRow}>
							<Input
								value={hp}
								name="hp"
								onChange={handleUpdate}
								classname={styles.hpInput}
							/>
							<span>/</span>
							<Input
								disabled={true}
								value={hpMax}
								name="hpMax"
								classname={styles.hpInput}
							/>
						</div>
						<div className={styles.nameRow}>
							<TextArea
								value={wounds}
								name="wounds"
								onChange={handleUpdate}
								classname={styles.textarea}
								placeholder="Wounds"
							/>
						</div>
					</div>
					<div className={styles.cell}>
						<div className={styles.buttonRow}>
							<Button
								variant="outline-secondary"
								className={styles.button}
								onClick={handleLock}
							>
							<FontAwesomeIcon
								icon={isLocked ? faLock : faLockOpen}
							/>
						</Button>
							<Button
								variant="outline-success"
								className={styles.button}
								onClick={handleClone}
							>
								<FontAwesomeIcon
									icon={faCopy}
								/>
							</Button>
							<Button
								variant="outline-danger"
								className={styles.button}
								onClick={handleDelete}
							>
								<FontAwesomeIcon
									icon={faTrashAlt}
								/>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Draggable>
	);
}
