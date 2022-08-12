import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import { numberToFormattedString } from '../../../services';
import "./styles.css";

const { Text } = Typography;
const TotalBox = ({ total }) => (
    <div className="TotalBox">
        <Text className="Text Tonne" id="amount">${numberToFormattedString(total.tonne)}</Text>
        <Text className="Text Tonne" id="description">Total / Tonne</Text>

        <div className="Divider" id="upperline"></div>
        <Text className="Title" id="description">Estimated Profit Increase</Text>
        <div className="Divider" id="lowerline"></div>

        <Text className="Text Annual" id="amount">${numberToFormattedString(total.annual)}</Text>
        <Text className="Text Annual" id="description">Total / Annual</Text>
    </div>
);



TotalBox.propTypes = {
    total: PropTypes.object.isRequired,
};

export default TotalBox;



                    