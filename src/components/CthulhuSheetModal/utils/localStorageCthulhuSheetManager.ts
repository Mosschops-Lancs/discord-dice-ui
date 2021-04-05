const CTHULHU_SHEET_STATE = 'cthulhuSheetState';

const localStorageCthulhuSheetManager = {
	save(cthulhuSheetState: any) {
		if (cthulhuSheetState) {
			localStorage.setItem(CTHULHU_SHEET_STATE, JSON.stringify(cthulhuSheetState));
		}
	},

	load() {
		const cthulhuSheetState = localStorage.getItem(CTHULHU_SHEET_STATE);
		if (cthulhuSheetState) {
			try {
				return JSON.parse(cthulhuSheetState)
			} catch {
				throw new Error ('Local Storage Cthulhu Sheet format is incorrect. Clear Local Storage entry and try again.');
			}
		}
		return null;
	},

	clear() {
		localStorage.removeItem(CTHULHU_SHEET_STATE);
	}
};

export default localStorageCthulhuSheetManager;