import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import classNames from 'classnames';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from "./CthulhuSheetModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { closeCthulhuSheetModal, cthulhuSkillValueEntered } from "../../actions/cthulhu.actions";
import cthulhuSkillsList, { SkillType } from './cthulhuSkillsList';
import CthulhuSkill from "./CthulhuSkill";

function CthulhuSheetModal() {
	const dispatch = useDispatch();
	const [state, setState] = useState({});
	const hideModal = () => dispatch(closeCthulhuSheetModal());
	const cthulhuState = useSelector(({ cthulhuState }: any) => cthulhuState);
	const { showCthulhuSheetModal, characterSheet } = cthulhuState;

	useEffect(() => {
		setState(characterSheet)
	}, [characterSheet, showCthulhuSheetModal])
	
	console.log('characterSheet', cthulhuState);

	const getValueById = (id: string) => {
		// @ts-ignore
		return state[id] || 0;
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(event.target.value);

		if (!isNaN(value)) {
			setState({
				...state,
				[event.target.name]: value
			});
		}

		// if (!isNaN(value)) {
		// 	cthulhuSkillValueEntered({
		// 		skillId: event.target.name,
		// 		value
		// 	})
		// }
	};

	const saveChanges = () => {
	};

	return (
		<Modal
			show={showCthulhuSheetModal}
			onHide={hideModal}
			size="lg"
		>
			<Modal.Header closeButton>
				<Modal.Title><FontAwesomeIcon className={styles.headerIcon} icon={faFileInvoice} /> Character Skills</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className={styles.containerBonusDice}>
					<div className={styles.bonusDiceLeft}>
						<div>
							<input type="checkbox"/>
							<span className={styles.bonusDiceLabel}>Apply <strong>one</strong> Bonus Die</span>
						</div>
						<div>
							<input type="checkbox"/>
							<span className={styles.bonusDiceLabel}>Apply <strong>two</strong> Bonus Dice</span>
						</div>
					</div>
					<div>
						<div>
							<input type="checkbox"/>
							<span className={styles.bonusDiceLabel}>Apply <strong>one</strong> Penalty Die</span>
						</div>
						<div>
							<input type="checkbox"/>
							<span className={styles.bonusDiceLabel}>Apply <strong>two</strong> Penalty Dice</span>
						</div>
					</div>
				</div>
				<div className={styles.list}>
					{
						cthulhuSkillsList.map((skill: SkillType) => (
							<CthulhuSkill
								name={skill.name}
								skillId={skill.id}
								value={getValueById(skill.id)}
								onChange={handleChange}
							/>
						))
					}
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="outline-secondary"
					onClick={hideModal}>Close</Button>
				<Button
					variant="success"
					onClick={saveChanges}
					type="submit">Save changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default CthulhuSheetModal;
