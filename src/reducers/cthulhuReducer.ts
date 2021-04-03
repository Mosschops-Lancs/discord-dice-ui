import {
	CLOSE_CTHULHU_MODAL,
	CLOSE_CTHULHU_RESULTS_MODAL,
	CLOSE_CTHULHU_SHEET_MODAL,
	CTHULHU_DICE_ROLLED,
	CTHULHU_PUSH_ROLL_REQESTED,
	OPEN_CTHULHU_MODAL,
	OPEN_CTHULHU_SHEET_MODAL
} from "../actions/cthulhu.actions";

const initialState = {
	results: {},
	isPushed: false,
	showModal: false,
	showResultsModal: false,
	showCthulhuSheetModal: false,
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
