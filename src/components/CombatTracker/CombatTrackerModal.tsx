// @ts-nocheck
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import useCombatTrackerStore from "./store";
import Zone from "./Zone";
import AddZone from "./AddZone";

function CombatTrackerModal({}: any) {
	const showModal = useCombatTrackerStore(({ isModalOpen }) => isModalOpen);
	const zones: Array<string> = useCombatTrackerStore(({ zones }) => zones);
	const closeModal: () => void = useCombatTrackerStore(({ closeModal }) => closeModal);
	const clearState: () => void = useCombatTrackerStore(({ clearState }) => clearState);
	const renders: () => void = useCombatTrackerStore(({ renders }) => renders);

	return (
		<Modal show={showModal} onHide={closeModal} size="lg">
			<Modal.Header closeButton>
				<Modal.Title>Combat Tracker</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Zone
					name="Waiting Room"
					index={-1}
					key={`waitingRoom:${renders}`}
				/>
				<AddZone />
				<section>
					{
						zones.map((zone: string, i: number) => (
							<Zone
								name={zone}
								index={i}
								key={`${i}:${renders}`}
							/>))
					}
				</section>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={clearState}>
					Clear
				</Button>
				<Button variant="outline-secondary" onClick={closeModal}>
					Save and close
				</Button>
				<Button variant="success" onClick={closeModal}>
					Save and send
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default CombatTrackerModal;
