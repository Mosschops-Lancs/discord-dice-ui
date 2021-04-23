import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import useCombatTrackerStore from "./store";

export default function AddZone() {
	const [zoneName, setZoneName] = useState('');
	const addZone: (name: string) => void = useCombatTrackerStore(({ addZone }) => addZone);

	const handleAddZone = (e: React.FormEvent) => {
		e.preventDefault();

		if (zoneName) {
			setZoneName('');
			addZone(zoneName);
		}
	};
	return (
		<form onSubmit={handleAddZone}>
			<input
				name="addZone"
				type="text"
				value={zoneName}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setZoneName(e.target.value)}
			/>
			<Button variant="primary" size="sm" type="submit">
				Add Zone
			</Button>
		</form>
	);
}
