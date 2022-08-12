import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import { numberToFormattedString, getSummaryTotal } from "../../../services";
import "./styles.css";

const { Text } = Typography;

const Summary = ({ result }) => {
    const [summary, setSummary] = useState(getSummaryTotal(result));

    useEffect(() => {
        setSummary(getSummaryTotal(result));
    }, [result]);

    return (
        <div className="Summary">
            {Object.keys(summary).map((key, index) => (
                <Text key={index} className="Text Box" id="description">{key}</Text>
            ))}
            {Object.keys(summary).map((key, index) => (
                <Text key={index} className="Text Box" id="amount">${numberToFormattedString(summary[key])}</Text>
            ))}
        </div>
    );
}

Summary.propTypes = {
    result: PropTypes.array.isRequired,
};

export default Summary;