import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from "antd";
import Modal from '../Modal';
import { userInstructions } from '../../../constants';
import "./styles.css";

const { Title, Text } = Typography;

const Help = ({ isOpen, onClose }) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Help" 
    >
        <Title className="Title" id="description">How to Use the ProSIS Value Configurator</Title>
        <div className="Instructions">
            { userInstructions.map((item) => (
                <div className="InstructionItem" key={item.id}>
                    <div key={item.id} className="Number">{item.id}</div>
                    <Text className="Text" id="default">{item.description}</Text>
                </div>
            ))}
        </div>
    </Modal>
);

Help.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Help;
