import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import classNames from 'classnames';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from "./CthulhuSheetModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { closeCthulhuSheetModal } from "../../actions/cthulhu.actions";
import cthulhuSkillsList from './cthulhuSkillsList';
import CthulhuSkill from "./CthulhuSkill";

function CthulhuSheetModal() {
	const dispatch = useDispatch();
	const hideModal = () => dispatch(closeCthulhuSheetModal());
	const cthulhuState = useSelector(({ cthulhuState }: any) => cthulhuState);
	const { showCthulhuSheetModal } = cthulhuState;

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
						cthulhuSkillsList.map(skill => <CthulhuSkill name={skill} />)
					}
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="outline-secondary"
					onClick={hideModal}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default CthulhuSheetModal;
