import { COMBAT_TRACKER_SEND_REQUESTED } from '../../actions/combatTracker.actions';
import { requestMsgReady } from '../../actions/roll.actions';
import { getColor } from '../../utils/getColor';
import useCombatTrackerStore from "../../components/CombatTracker/store";

export default (store: any) => (next: any) => (action: any) => {
	if (action.type === COMBAT_TRACKER_SEND_REQUESTED) {
		const state = useCombatTrackerStore.getState();
		const { combatants, zones } = state;
		let description = '';

		const longestName = combatants.reduce((acc, c) => Math.max(acc, c.name.length), 1);

		const longestInitiative = combatants.reduce((acc, c) => {
			return Math.max(acc, `${c.initiative}`.length);
		}, 1);

		const longestHP = combatants.reduce((acc, c) => {
			return Math.max(acc, `${c.hp}`.length + `${c.hpMax}`.length + 1);
		}, 1);

		console.log('longestHP', longestHP)

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
				const name = c.name.padEnd(longestName);
				const hp = `${c.hp}/${c.hpMax}`.padStart(longestHP);

				description += `${initiative} | ${name} | ${hp} HP\n`;
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
