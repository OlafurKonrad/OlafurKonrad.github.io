import React from "react";
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import "./styles.css";

const { Text } = Typography;

const TermsAndConditions = ({ isAccepted, onAccept }) => (
    <div className="TermsAndConditions">
        { isAccepted
            ? <ImCheckboxChecked className="Checkbox" id="checked" onClick={() => onAccept("terms", !isAccepted)} />
            : <ImCheckboxUnchecked className="Checkbox" onClick={() => onAccept("terms", !isAccepted)} /> }  
        <Text>I agree to the Terms of service and Privacy Policy</Text>
    </div>
);

TermsAndConditions.propTypes = {
    isAccepted: PropTypes.bool.isRequired,
    onAccept: PropTypes.func.isRequired,
};

export default TermsAndConditions;