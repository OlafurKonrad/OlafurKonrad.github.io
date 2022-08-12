import React from "react";
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import { Typography } from "antd";
import { templateList } from "../../../constants";
import "./styles.css";

const { Text } = Typography;

const TemplateSelect = ({ isSelected, onSelect, operation }) => (
    <> {templateList[operation].map((item) => (
        <Link
            to="results" 
            smooth
            key={item.id}
            className="Template Item"
            id={isSelected===item.id ? "selected" : null}
            onClick={() => {onSelect(item.id);}}
        >
            <div className="IconContainer"> {item.icon}</div>
            <Text id="amount">{item.productionAmount}K</Text>
            <Text id="description">Metric Tons of Aluminum Produced per Year</Text>
        </Link>
    ))} </>
);

TemplateSelect.propTypes = {
    isSelected: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired,

};

export default TemplateSelect;