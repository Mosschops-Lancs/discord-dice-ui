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
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input ({ value, classname, name, onChange }: InputProps) {
	return (
		<input
			className={classNames([styles.input, classname])}
			name={name}
			value={value}
			onChange={onChange}
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
	isLocked
}: CombatantTypes) {
	const setIsDragging = useCombatTrackerStore(({ setIsDragging }) => setIsDragging);
	const setCombatantZone = useCombatTrackerStore(({ setCombatantZone }) => setCombatantZone);
	const forceUpdateCombatants = useCombatTrackerStore(({ forceUpdateCombatants }) => forceUpdateCombatants);
	const deleteCombatant = useCombatTrackerStore(({ deleteCombatant }) => deleteCombatant);
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
							value={name}
							name="name"
							onChange={handleUpdate}
						/>
					</div>
					<div className={styles.cell}>
						<Input
							value={hp}
							name="hp"
							onChange={handleUpdate}
							classname={styles.hpInput}
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
						<Input
							value={conditions}
							name="conditions"
							onChange={handleUpdate}
						/>
					</div>
					<div className={styles.cell}>
						<Input
							value={wounds}
							name="wounds"
							onChange={handleUpdate}
						/>
					</div>
					<div className={styles.cell}>
						<Button
							variant="outline-secondary"
							className={styles.button}
							onClick={handleLock}
						>
							<FontAwesomeIcon
								icon={isLocked ? faLock : faLockOpen}
							/>
						</Button>
					</div>
					<div className={styles.cell}>
						<Button
							variant="outline-success"
							className={styles.button}
						>
							<FontAwesomeIcon
								icon={faCopy}
							/>
						</Button>
					</div>
					<div className={styles.cell}>
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
		</Draggable>
	);
}
