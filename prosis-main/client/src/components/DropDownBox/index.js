import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InfoBox from '../InfoBox';
import "./styles.css";

const DropDownBox = ({ type, children, isOpen, onClick }) => {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`DropDownBox ${type}`} id={ isOpen ? "open" : null }>
            <InfoBox dropdown type={type} isOpen={isOpen} onClick={onClick}>
                {children[0]}
            </InfoBox>
            <div className="DropDownContent"  id={type}>
                {children[1]}
            </div>
        </div>
    );
};

DropDownBox.propTypes = {
    type: PropTypes.string,
};

DropDownBox.defaultProps = {
    type: "Default",
}

export default DropDownBox;
