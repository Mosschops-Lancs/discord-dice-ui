import { combineReducers } from 'redux';
import settingsModalReducer from './settingsModalReducer';
import userSettingsReducer from './userSettingsReducer';
import modifierModalReducer from './modifierModalReducer';
import cocModalReducer from './cocModalReducer';
import warhammerModalReducer from './warhammerModalReducer';
import warhammerSlModeReducer from './warhammerSlModeReducer';
import conanModalReducer from './conanModalReducer';
import selectedDiceReducer from './selectedDiceReducer';
import msgReducer from './msgReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
	showSettingsModal: settingsModalReducer,
	showModifierModal: modifierModalReducer,
	showCoCModal: cocModalReducer,
	showWarhammerModal: warhammerModalReducer,
	warhammerSlMode: warhammerSlModeReducer,
	showConanModal: conanModalReducer,
	userSettings: userSettingsReducer,
	selectedDice: selectedDiceReducer,
	form: formReducer,
	msg: msgReducer
});