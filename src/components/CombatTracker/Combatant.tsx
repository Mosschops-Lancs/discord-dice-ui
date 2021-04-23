import React from "react";
import Draggable from 'react-draggable';
import classNames from "classnames";
import styles from './Combatant.module.css';
import useCombatTrackerStore, { CombatantTypes } from "./store";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCopy } from "@fortawesome/free-regular-svg-icons";
import { faGripHorizontal, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

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
	const lockCombatant = useCombatTrackerStore(({ lockCombatant }) => lockCombatant);
	const hoverZone = useCombatTrackerStore(({ hoverZone }) => hoverZone);
	const zones = useCombatTrackerStore(({ zones }) => zones);

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
						<input
							className={styles.input}
							value={name}
						/>
					</div>
					<div className={styles.cell}>
						<input
							className={classNames([styles.input, styles.hpInput])}
							value={hp}
						/>
					</div>
					<div className={styles.cell}>
						<input
							className={classNames([styles.input, styles.initiativeInput])}
							value={initiative}
						/>
					</div>
					<div className={styles.cell}>
						<input
							className={styles.input}
							value={conditions}
						/>
					</div>
					<div className={styles.cell}>
						<input
							className={styles.input}
							value={wounds}
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
