import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from "antd";
import Modal from '../Modal';
import "./styles.css";

const { Title } = Typography;

const EmailShare = ({ isOpen, onClose, goBack, goForward }) => (
    <Modal
        title="Share" 
        isOpen={isOpen}
        onClose={onClose}
        goBack={goBack}
        action="Send"
        goForward={() => goForward(3)}
    >
        <Title level={3}>Share to...</Title>
    </Modal>
);

EmailShare.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    goForward: PropTypes.func.isRequired,
};

export default EmailShare;
