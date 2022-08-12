import React from "react";
import { Button, Typography } from "antd";
import { FiUser, FiPhone, FiMail } from "react-icons/fi";
import Container from "../Containers/Container";
import { Iceland, USA } from "../../resources/Icons";
import "./styles.css";

const { Text, Title } = Typography;
const iconSize = 32;

const ContactInfo = ({ id }) => (
    <Container type="Contact" id={id}>
        <Title className="Title" id="contact">Contact Information</Title>

        <FiUser className="Person Icon" size={iconSize} />
        <div className="ContactField Person First">
            <Text className="Info">DTE ehf</Text>
        </div>

        <FiPhone className="Phone Icon" size={iconSize} />
        <Button className="ContactField Phone ICE First" href="tel:+354-454-0101">
            <Iceland className="Country Iceland" />
            <Text className="Info">+354 454 0101</Text>
        </Button>
        <Button className="ContactField Phone USA Second" href="tel:+1-315-400-1470">
            <USA className="Country USA" />
            <Text className="Info">+1 315 400 1470</Text>
        </Button>

        <FiMail className="Email Icon"size={iconSize} />
        <Button className="ContactField Email BI First" href="mailto:businessintelligence@dte.ai">
            <Text className="Info">businessintelligence@dte.ai</Text>
        </Button>
        <Button className="ContactField Email Sales Second" href="mailto:sales@dte.ai">
            <Text className="Info">sales@dte.ai</Text>
        </Button>
    </Container>
);


export default ContactInfo;