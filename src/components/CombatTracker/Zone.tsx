import React from "react";
import classNames from "classnames";
import styles from './Zone.module.css';
import AddCombatant from "./AddCombatant";
import useCombatTrackerStore, { CombatantTypes } from "./store";
import Combatant from "./Combatant";
import combatantStyles from './Combatant.module.css';

interface ZoneProps {
	name: string;
	index: number;
}

export default function Zone({ name, index }: ZoneProps) {
	const combatants = useCombatTrackerStore(
		({ combatants }) => combatants.filter(c => c.zoneIndex === index)
	);
	const isDragging = useCombatTrackerStore(({ isDragging }) => isDragging);

	return (
		<div className={styles.container} id={`${index}`}>
			{ isDragging && <div className={styles.draggingOverlay} /> }
			<div className={styles.name}>
				{name}
			</div>
			<div className={classNames([combatantStyles.table, styles.legend])}>
				<div className={combatantStyles.cell} />
				<div className={combatantStyles.cell}>name</div>
				<div className={combatantStyles.cell}>hp</div>
				<div className={combatantStyles.cell}>initiative</div>
				<div className={combatantStyles.cell}>wounds</div>
				<div className={combatantStyles.cell}>conditions</div>
				<div className={combatantStyles.cell} />
				<div className={combatantStyles.cell} />

			</div>
			<div>
				{
					combatants.map((combatant: CombatantTypes) => <Combatant {...combatant} /> )
				}
			</div>
				<AddCombatant zoneIndex={index} />
		</div>
	);
}
