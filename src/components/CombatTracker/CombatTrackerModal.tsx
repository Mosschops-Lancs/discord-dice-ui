import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import useCombatTrackerStore from "./store";

function CombatTrackerModal({}: any) {
    const showModal = useCombatTrackerStore(({ isModalOpen}) => isModalOpen);
    // @ts-ignore
    const closeModal: () => void = useCombatTrackerStore(({ closeModal }) => closeModal);

    return (
        <Modal show={showModal} onHide={closeModal}  size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Combat Tracker</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                COMBAT TRACKER
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={closeModal}>
                    Cancel
                </Button>
                <Button variant="secondary" onClick={closeModal}>
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
