import React from "react";
import Draggable from 'react-draggable';
import classNames from "classnames";
import styles from './Combatant.module.css';
import useCombatTrackerStore, { CombatantTypes } from "./store";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCopy,  } from "@fortawesome/free-regular-svg-icons";
import { faGripHorizontal } from "@fortawesome/free-solid-svg-icons";

export default function Combatant({
	name,
	hp,
	initiative,
	wounds,
	conditions,
	id
}: CombatantTypes) {
	const setIsDragging = useCombatTrackerStore(({ setIsDragging }) => setIsDragging);
	const setCombatantZone = useCombatTrackerStore(({ setCombatantZone }) => setCombatantZone);
	const hoverZone = useCombatTrackerStore(({ hoverZone }) => hoverZone);

	const handleStart = () => {
		setIsDragging(true);
	};
	const handleStop = () => {
		setIsDragging(false);

		if (hoverZone !== null) {
			setCombatantZone(id, hoverZone);
		}

		console.log('on stop hoverZone', hoverZone)
	};

	return (
		<Draggable
			handle=".handle"
			onStart={handleStart}
			onStop={handleStop}
		>
			<div className={styles.container}>
				<div className={styles.table}>
					<div className={classNames([styles.cell, styles.dragHandle, "handle"])}>
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
