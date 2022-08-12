import React from 'react';
import PropTypes from 'prop-types';
import { RiArrowDownSFill } from "react-icons/ri";
import "./styles.css";

const InfoBox = ({ type, dropdown, isOpen, onClick, children }) => (
    <div 
        className="InfoBox" 
        id={type} 
        onClick={dropdown ? () => onClick(!isOpen) : null}
    >
        {children}
        { dropdown ? <RiArrowDownSFill className="Arrow" /> : null }
    </div>
);


InfoBox.propTypes = {
    type: PropTypes.string,
    dropdown: PropTypes.bool,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
};

InfoBox.defaultProps = {
    type: "Default",
    dropdown: false,
    isOpen: false,
}

export default InfoBox;
