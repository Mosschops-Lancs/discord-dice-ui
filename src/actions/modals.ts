import { requestParams } from '../utils/request';

export const OPEN_SETTINGS_MODAL = 'OPEN_SETTINGS_MODAL';
export const CLOSE_SETTINGS_MODAL = 'CLOSE_SETTINGS_MODAL';

export const OPEN_MODIFIER_MODAL = 'OPEN_MODIFIER_MODAL';
export const CLOSE_MODIFIER_MODAL = 'CLOSE_MODIFIER_MODAL';

export const OPEN_COC_MODAL = 'OPEN_COC_MODAL';
export const CLOSE_COC_MODAL = 'CLOSE_COC_MODAL';

export const OPEN_WARHAMMER_MODAL = 'OPEN_WARHAMMER_MODAL';
export const CLOSE_WARHAMMER_MODAL = 'CLOSE_WARHAMMER_MODAL';

export const OPEN_CONAN_MODAL = 'OPEN_CONAN_MODAL';
export const CLOSE_CONAN_MODAL = 'CLOSE_CONAN_MODAL';

export const OPEN_MSG_MODAL = 'OPEN_MSG_MODAL';
export const CLOSE_MSG_MODAL = 'CLOSE_MSG_MODAL';

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

export function openWarhammerModal() {
	return {
		type: OPEN_WARHAMMER_MODAL
	};
}

export function closeWarhammerModal() {
	return {
		type: CLOSE_WARHAMMER_MODAL
	};
}


export function openConanModal() {
	return {
		type: OPEN_CONAN_MODAL
	};
}

export function closeConanModal() {
	return {
		type: CLOSE_CONAN_MODAL
	};
}

export function showMsgModal(msgParams:requestParams) {
	return {
		type: OPEN_MSG_MODAL,
		msgParams
	};
}

export function hideMsg() {
	return {
		type: CLOSE_MSG_MODAL
	};
}