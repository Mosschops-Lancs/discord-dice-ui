import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import useCombatTrackerStore from "./store";
import styles from './AddZone.module.css'

export default function AddZone() {
	const [zoneName, setZoneName] = useState('');
	const addZone: (name: string) => void = useCombatTrackerStore(({ addZone }) => addZone);

	const handleAddZone = (e: React.FormEvent) => {
		e.preventDefault();

		const zoneNameTrimmed = zoneName.trim();

		if (zoneNameTrimmed && zoneNameTrimmed.length < 60) {
			setZoneName('');
			addZone(zoneNameTrimmed);
		}
	};
	return (
		<form onSubmit={handleAddZone} className={styles.container}>
			<input
				name="addZone"
				type="text"
				value={zoneName}
				className={styles.input}
				placeholder="Zone's Name"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setZoneName(e.target.value)}
			/>
			<Button variant="primary" size="sm" type="submit">
				Add Zone
			</Button>
		</form>
	);
}
