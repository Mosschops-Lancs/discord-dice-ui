import { CombatantTypes, CreateCombatant } from "../store";

export function createCombatant( combatantData: CreateCombatant): CombatantTypes {
	return {
		...combatantData,
		wounds: '',
		conditions: '',
		id: Date.now()
	};
}
