import React from 'react';
import { Typography } from 'antd';
import { additionalBenefits } from '../../../constants';
import InfoBox from '../../InfoBox';
import "./styles.css";

const { Title, Text } = Typography;

const AdditionalBenefits = ({ type }) => (
    <InfoBox type="Benefits">
        <Title className="Title Box">Additional Benefits</Title>
        <ul>
            {additionalBenefits[type].map((item, idx) => (
                <li key={idx}><Text>{item}</Text></li>
            ))}
        </ul>
    </InfoBox>
);


export default AdditionalBenefits;


                    