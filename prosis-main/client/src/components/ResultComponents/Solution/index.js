import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Typography } from 'antd';
import ContactInfo from '../../ContactInfo';
import DropDownBox from '../../DropDownBox';
import "./styles.css";

const { Title, Text } = Typography;

const Solution = ({devices}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <DropDownBox type="Solution" isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <Title className="Title Box" id="solution">Suggested Solution</Title>
            <>
                <Text className="Text" id="default">
                    Our proposed solution from the information given is below. It is estimated from your input and our ProSIS calculator.
                </Text>
                {devices.map((device, index) => (
                    <div className="Device" key={index}>
                        <Text>{device.title}</Text>
                        <Text>{device.amount}</Text>
                        <Text>Devices</Text>
                    </div>
                ))}
                <Text className="Text" id="default">If you want to deploy solution over a period of time, give us a call. (ef dreift er á fleiri ár, á eftir að uppfæra texta)</Text>
                <ContactInfo id="solution"/>
            </>
        </DropDownBox>
    );
}

export default Solution;
