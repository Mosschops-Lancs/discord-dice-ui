import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { cthulhuSheetUpdateRequested } from "../../actions/cthulhu.actions";
import localStorageCthulhuSheetManager from "../CthulhuSheetModal/utils/localStorageCthulhuSheetManager";

function LocalStorageManager() {
	const dispatch = useDispatch();

	useEffect(() => {
		const storedCthulhuSheetState = localStorageCthulhuSheetManager.load();
		if (storedCthulhuSheetState) {
			dispatch(cthulhuSheetUpdateRequested(storedCthulhuSheetState));
		}
	}, [dispatch]);

	return (<> {/* LOCAL STORAGE MANAGER*/} </>);
}

export default LocalStorageManager;
