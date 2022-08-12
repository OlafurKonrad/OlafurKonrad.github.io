import React from "react";
import PropTypes from 'prop-types';
import { Button, Typography } from 'antd';
import { operationTypes } from "../../../constants/OperationTypes";
import "./styles.css";

const { Text } = Typography;

const OperationType = ({ isSelected, onSelect, update }) => (
    <div className="OperationTypes">
        { operationTypes.map((type) => (
            <Button
                key={type.id}
                className="Operation SelectionButton"
                id={isSelected===type.id ? "selected" : null} 
                onClick={() => {onSelect(type.id); update({operation: type.id})}}
            >
                {type.icon}
                <Text>{type.title[0]}</Text>
                {type.title[1] ? <Text id="secondaryTitle">{type.title[1]}</Text> : null}
            </Button>
        ))}
    </div>
);

OperationType.propTypes = {
    isSelected: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
};

export default OperationType;