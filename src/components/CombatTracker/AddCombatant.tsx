import React, { useState } from "react";
import classNames from "classnames";
import Button from "react-bootstrap/Button";
import useCombatTrackerStore from "./store";
import styles from './AddCombatant.module.css';

interface AddCombatantProps {
	zoneIndex: number;
}

export default function AddCombatant({ zoneIndex }: AddCombatantProps) {
	const [name, setName] = useState('');
	const [hp, setHp] = useState('');
	const [initiative, setInitiative] = useState('');

	const addCombatant = useCombatTrackerStore(({ addCombatant }) => addCombatant);

	const handleAddCombatant = (e: React.FormEvent) => {
		e.preventDefault();

		const hpNum = parseInt(hp, 10);
		const initiativeNum = parseInt(initiative, 10);

		if (name && hpNum && initiativeNum) {
			addCombatant({
				name,
				hp: hpNum,
				initiative: initiativeNum,
				zoneIndex
			});

			setName('');
			setHp('');
			setInitiative('');
		}
	};

	return (
		<form onSubmit={handleAddCombatant} className={styles.container}>
			<input
				name="initiative"
				type="text"
				value={initiative}
				placeholder="Initiative"
				className={classNames([styles.input, styles.initiativeInput])}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInitiative(e.target.value)}
			/>
			<input
				name="name"
				type="text"
				value={name}
				placeholder="Combatant's Name"
				className={classNames([styles.input, styles.nameInput])}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
			/>
			<input
				name="hp"
				type="text"
				value={hp}
				placeholder="HP"
				className={classNames([styles.input, styles.hpInput])}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHp(e.target.value)}
			/>
			<Button variant="primary" size="sm" type="submit">
				Add Combatant
			</Button>
		</form>
	);
}
