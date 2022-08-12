import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import "./styles.css";

const Confirm = ({ isOpen, onClose }) => (
    <Modal
        title="Email Sent!" 
        isOpen={isOpen}
        onClose={onClose}
    >
    </Modal>
);

Confirm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Confirm;
