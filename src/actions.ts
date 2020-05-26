import { requestParams } from './utils/request';

/* SETTINGS MODAL *************************/

export const OPEN_SETTINGS_MODAL = 'OPEN_SETTINGS_MODAL';
export const CLOSE_SETTINGS_MODAL = 'CLOSE_SETTINGS_MODAL';
export const SAVE_USER_SETTINGS = 'SAVE_USER_SETTINGS';

export function openSettingsModal() {
	return {
		type: OPEN_SETTINGS_MODAL
	};
}

export function closeSettingsModal() {
	return {
		type: CLOSE_SETTINGS_MODAL
	};
}

export function saveUserSettings(userSettings:any) {
	return {
		type: SAVE_USER_SETTINGS,
		userSettings
	};
}


/* MODIFIER MODAL *************************/

export const OPEN_MODIFIER_MODAL = 'OPEN_MODIFIER_MODAL';
export const CLOSE_MODIFIER_MODAL = 'CLOSE_MODIFIER_MODAL';

export function openModifierModal() {
	return {
		type: OPEN_MODIFIER_MODAL
	};
}

export function closeModifierModal() {
	return {
		type: CLOSE_MODIFIER_MODAL
	};
}

/* CoC MODAL *************************/

export const OPEN_COC_MODAL = 'OPEN_COC_MODAL';
export const CLOSE_COC_MODAL = 'CLOSE_COC_MODAL';


export function openCoCModal() {
	return {
		type: OPEN_COC_MODAL
	};
}

export function closeCoCModal() {
	return {
		type: CLOSE_COC_MODAL
	};
}

/* Warhammer4e MODAL *************************/

export const OPEN_WARHAMMER4E_MODAL = 'OPEN_WARHAMMER4E_MODAL';
export const CLOSE_WARHAMMER4E_MODAL = 'CLOSE_WARHAMMER4E_MODAL';


export function openWarhammer4eModal() {
	return {
		type: OPEN_WARHAMMER4E_MODAL
	};
}

export function closeWarhammer4eModal() {
	return {
		type: CLOSE_WARHAMMER4E_MODAL
	};
}

/* MSG ************************************/

export const SHOW_MSG = 'SHOW_MSG';
export const HIDE_MSG = 'HIDE_MSG';

export function showMsg(msgParams:requestParams) {
	return {
		type: SHOW_MSG,
		msgParams
	};
}

export function hideMsg() {
	return {
		type: HIDE_MSG
	};
}

/* DICE ***********************************/

export const SELECT_DICE = 'SELECT_DICE';

export function selectDice(selectedDice:any) {
	return {
		type: SELECT_DICE,
		selectedDice
	};
}