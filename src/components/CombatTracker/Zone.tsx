import React from "react";
import styles from './Zone.module.css';
import AddCombatant from "./AddCombatant";
import useCombatTrackerStore, { Combatant } from "./store";


interface ZoneProps {
	name: string;
	index: number;
}

export default function Zone({ name, index }: ZoneProps) {
	const combatants = useCombatTrackerStore(({ combatants }) => combatants);

	console.log('combatants', combatants);

	return (
		<div className={styles.container}>
			<div className={styles.name}>
				{name}
			</div>
			<div>
				{
					combatants.map((combatant: Combatant) => ( <span>{combatant.combatantName}</span>))
				}
			</div>
			<div className={styles.body}>
				<AddCombatant zoneIndex={index} />
			</div>
		</div>
	);
}
