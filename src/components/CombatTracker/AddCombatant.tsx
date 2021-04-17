import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import useCombatTrackerStore from "./store";

interface AddCombatantProps {
	zoneIndex: number;
}

export default function AddCombatant({ zoneIndex }: AddCombatantProps) {
	const [combatantName, setCombatantName] = useState('');
	const [hp, setHp] = useState('');
	const [initiative, setInitiative] = useState('');

	const addCombatant = useCombatTrackerStore(({ addCombatant }) => addCombatant);

	const handleAddCombatant = (e: React.FormEvent) => {
		e.preventDefault();

		const hpNum = parseInt(hp, 10);
		const initiativeNum = parseInt(initiative, 10);

		if (combatantName && hpNum && initiativeNum) {
			addCombatant({
				combatantName,
				hp: hpNum,
				initiative: initiativeNum,
				zoneIndex
			});

			setCombatantName('');
			setHp('');
			setInitiative('');
		}
	};

	return (
		<form onSubmit={handleAddCombatant}>
			<input
				name="combatantName"
				type="text"
				value={combatantName}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCombatantName(e.target.value)}
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
