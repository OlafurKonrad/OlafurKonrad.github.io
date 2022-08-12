import React from "react";
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { resultTypes } from "../../../constants/Categories";
import "./styles.css";


const ResultType = ({ resultID, isSelected, onSelect, smelterType }) => {
    let type = resultID===2 ? "Overview" : "Result";
    if (smelterType===0) type = resultTypes[resultID];

    return (
        <Button
            className={`ResultButton ${type}`}
            id={isSelected ? "selected" : null}
            onClick={() => onSelect(resultID)}
            // style={{gridArea: resultID===2 ? "Overview" : "Result"}}
        >
            {resultTypes[resultID]}
        </Button>
    );
};

ResultType.propTypes = {
    resultID: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,

};

export default ResultType;