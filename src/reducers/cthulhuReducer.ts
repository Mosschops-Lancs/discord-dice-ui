import {
	CLOSE_CTHULHU_MODAL,
	CLOSE_CTHULHU_RESULTS_MODAL,
	CLOSE_CTHULHU_SHEET_MODAL,
	CTHULHU_ROLL_REQESTED,
	CTHULHU_DICE_ROLLED,
	CTHULHU_PUSH_ROLL_REQESTED,
	OPEN_CTHULHU_MODAL,
	OPEN_CTHULHU_SHEET_MODAL,
	CTHULHU_UPDATE_SKILL_VALUE
} from "../actions/cthulhu.actions";

const initialState = {
	results: {},
	isPushed: false,
	showModal: false,
	showResultsModal: false,
	showCthulhuSheetModal: false,
	characterSheet: {}
};

function cthulhuReducer(state = initialState, action: any) {
	switch (action.type) {
		case OPEN_CTHULHU_MODAL:
			return {
				...state,
				isPushed: false,
				showModal: true
			};
		case CTHULHU_PUSH_ROLL_REQESTED:
			return {
				...state,
				isPushed: true
			}
		case CLOSE_CTHULHU_MODAL:
			return {
				...state,
				showModal: false
			};
		case CTHULHU_ROLL_REQESTED:
		case CTHULHU_UPDATE_SKILL_VALUE: {
			if (action.payload.skillId) {
				const characterSheetUpdated = {...initialState.characterSheet};
				// @ts-ignore
				characterSheetUpdated[action.payload.skillId] = action.payload.skillLevel;
				return {
					...state,
					characterSheet: {
						...characterSheetUpdated
					}
				};
			}
			break;
		}
		case CTHULHU_DICE_ROLLED:
			return {
				...state,
				results: action.payload,
				showResultsModal: true
			};
		case CLOSE_CTHULHU_RESULTS_MODAL:
			return {
				...state,
				showResultsModal: false
			}
		case OPEN_CTHULHU_SHEET_MODAL:
			return {
				...state,
				showCthulhuSheetModal: true
			}
		case CLOSE_CTHULHU_SHEET_MODAL:
			return {
				...state,
				showCthulhuSheetModal: false
			}
	}
	return state;
}

export default cthulhuReducer;
