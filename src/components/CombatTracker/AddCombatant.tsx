import React, { useState } from "react";
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
				name="name"
				type="text"
				value={name}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
			/>
			<input
				name="hp"
				type="text"
				value={hp}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHp(e.target.value)}
			/>
			<input
				name="initiative"
				type="text"
				value={initiative}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInitiative(e.target.value)}
			/>
			<Button variant="primary" type="submit">
				Add Combatant
			</Button>
		</form>
	);
}
