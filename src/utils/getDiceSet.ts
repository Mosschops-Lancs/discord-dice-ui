import {
	classicSet,
	warhammerSet,
	conanSet,
	CoCSet,
	poolSet,
	narrativeDiceSet,
	l5rDiceSet,
	fateDiceSet,
	l5r1eDiceSet
} from '../consts/diceSets';
import { WARHAMMER, CONAN, COC } from '../consts/consts';
import { DiceSetType } from '../components/DiceModule/DiceTypes';
import { POOL, NARRATIVE_DICE, L5R_DICE, L5R_1E_DICE } from '../consts/diceConstants';
import { FATE_DICE } from '../consts/fateConsts';

export default (setType: string): DiceSetType => {
	if (setType === WARHAMMER) {
		return warhammerSet;
	} else if (setType === CONAN) {
		return conanSet;
	} else if (setType === COC) {
		return CoCSet;
	} else if (setType === POOL) {
		return poolSet;
	} else if (setType === NARRATIVE_DICE) {
		return narrativeDiceSet;
	} else if (setType === L5R_DICE) {
		return l5rDiceSet;
	} else if (setType === L5R_1E_DICE) {
		return l5r1eDiceSet;
	} else if (setType === FATE_DICE) {
		return fateDiceSet
	}
	return classicSet;
};
