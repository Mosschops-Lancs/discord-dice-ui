import React from 'react';
import { connect } from 'react-redux';
import { showMsg, hideMsg } from '../../actions';
import Reroll from './Reroll';
import getWarhammerRequestMsg from '../../utils/getWarhammerRequestMsg';
import getWarhammerLocalMsg from '../../utils/getWarhammerLocalMsg';
import getConanRequestMsg from '../../utils/getConanRequestMsg';
import getConanLocalMsg from '../../utils/getConanLocalMsg';
import getRequestMsg from '../../utils/getRequestMsg';
import getLocalMsg from '../../utils/getLocalMsg';
import rollDice from '../../utils/rollDice';
import { request } from '../../utils/request';

const mapDispatchToProps = { showMsg, hideMsg };

function RerollContainer({
	rollOptions = {},
	userSettings,
	showMsg,
	hideMsg,
	results
}:any) {
	let reroll = (itemsToStay:Array<number>) => {};

	if (rollOptions.warhammerMode) {
		reroll = () => {
			const result = rollDice({
				diceType : 100,
				rollOptions
			});
			const requestMsg = getWarhammerRequestMsg(result, rollOptions, userSettings);
			const localMsg = getWarhammerLocalMsg(result, rollOptions, userSettings);
		
			showMsg(localMsg);
			request(requestMsg);
		}
	} else if (rollOptions.conanMode && !(rollOptions.diceTypeRaw === 'd6conan')) {
		reroll = (itemsToStay:Array<number>) => {
			rollOptions.fortune = 0;

			const result = rollDice({
				diceType: 20,
				diceAmount: Number(rollOptions.dice),
				rollOptions,
				itemsToStay
			});
			// const requestMsg = getConanRequestMsg(result.results, rollOptions, userSettings);
			const localMsg = getConanLocalMsg(result.results, rollOptions, userSettings);
		
			showMsg(localMsg);
			// request(requestMsg);
		}
	} else if (rollOptions.diceTypeRaw === 'd6conan') {
		reroll = (itemsToStay:Array<number>) => {
			const diceAmount = Number(rollOptions.diceAmount);
			const result = rollDice({
				diceType: 6,
				diceAmount: Number(rollOptions.diceAmount),
				rollOptions,
				itemsToStay
			});
			// const requestMsg = getRequestMsg(result.results, rollOptions, userSettings);
			// @TODO getLocalMsg first param should be the same as other getLocalMsgs
			const localMsg = getLocalMsg(result, rollOptions, userSettings);
			showMsg(localMsg);
			// request(requestMsg);
		}
	}

	const handleReroll = (itemsToStay:Array<number>) => {
		hideMsg();
		rollOptions.rerolledTimes = !rollOptions.rerolledTimes ? 1 : rollOptions.rerolledTimes + 1;
		setTimeout(() => reroll(itemsToStay), 500);
	};

	return (
		<Reroll
			handleReroll={handleReroll}
			rollOptions={rollOptions}
			results={results}
		/>
	);
}

export default connect(undefined, mapDispatchToProps)(RerollContainer);