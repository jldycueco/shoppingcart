import React from 'react';
import { Header, Modal } from 'semantic-ui-react';

const ModalComponent = ({ showModal, closeModal }) => {
  return (
    <>
      <Modal open={showModal} closeIcon onClose={closeModal}>
        <Header content="Order" />
        <Modal.Content>
          <p>Thank you for ordering!</p>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default ModalComponent;
