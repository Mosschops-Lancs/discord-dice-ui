import { CombatantTypes, CreateCombatant } from "../store";

export const createCombatantId = () => Date.now();

export function createCombatant( combatantData: CreateCombatant): CombatantTypes {
	return {
		...combatantData,
		wounds: '',
		conditions: '',
		id: createCombatantId(),
		isLocked: false,
		hpMax: combatantData.hp
	};
}
