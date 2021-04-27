import { COMBAT_TRACKER_SEND_REQUESTED } from '../../actions/combatTracker.actions';
import { requestMsgReady } from '../../actions/roll.actions';
import { getColor } from '../../utils/getColor';
import useCombatTrackerStore from "../../components/CombatTracker/store";
import { chunkString } from "../../components/CombatTracker/utils/utils";

export default (store: any) => (next: any) => (action: any) => {
	if (action.type === COMBAT_TRACKER_SEND_REQUESTED) {
		const state = store.getState();
		const showAdvantage = state.form.diceModuleForm?.values?.warhammerMode;

		const combatTrackerState = useCombatTrackerStore.getState();
		const { combatants, zones } = combatTrackerState;

		const longestName = combatants.reduce((acc, c) => Math.max(acc, c.name.length), 10);

		const longestInitiative = combatants.reduce((acc, c) => {
			return Math.max(acc, `${c.initiative}`.length);
		}, 1);

		const longestHP = combatants.reduce((acc, c) => {
			return Math.max(acc, `${c.hp}`.length + `${c.hpMax}`.length + 1);
		}, 1);

		const longestAdvantage = showAdvantage
			? combatants.reduce((acc, c) => Math.max(acc, ` (${c.advantage})`.length), 0)
			: 0;

		let description = '';

		zones.forEach((zoneName, currentZone) => {
			description += '```md\n';
			description += zoneName;
			description += '\n';
			description += '=============================\n';

			const zoneCombatants = combatants
				.filter(c => c.zoneIndex === currentZone)
				.sort((a, b) => b.initiative - a.initiative);

			zoneCombatants.forEach(c => {
				const initiative = `${c.initiative}`.padStart(longestInitiative);
				const name = `${c.name}${showAdvantage ? ` (${c.advantage})` : ''}`
					.padEnd(longestName + longestAdvantage);
				const hp = `${c.hp}/${c.hpMax}`.padStart(longestHP);

				description += `${initiative} | ${name} | ${hp} HP\n`;

				// Now add Conditions and Wounds
				if (c.conditions || c.wounds) {
					const conditionsChunks = chunkString(c.conditions, longestName);
					const woundsChunks = chunkString(c.wounds, 10);

					const additionalLines = Math.max(conditionsChunks.length, woundsChunks.length);
					const initiativePlaceholder = ' '.repeat(initiative.length) + ' | '

					for (let line = 0; line < additionalLines; line += 1) {
						const conditions = conditionsChunks[line] || '';
						const wounds = woundsChunks[line] || '';
						description += `${initiativePlaceholder}${conditions.padEnd(longestName + longestAdvantage)} | ${wounds}\n`;
					}
				}

			});

			description += '```';
		});

		store.dispatch(requestMsgReady({
			msgTitle: `:crossed_swords: Combat Tracker`,
			color: getColor(),
			description
		}));
	}
	next(action);
};
