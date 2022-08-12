import React, { useState } from "react";
import PropTypes from 'prop-types';
import Container from "../../../components/Containers/Container";
import ContentContainer from "../../../components/Containers/ContentContainer";
import modal from "../../../services";
import TemplateSelect from "../../../components/SelectionButtons/TemplateSelect";
import "./styles.css";

const { help } = modal;

const Calculator = ({ isSelected, onSelect, operation }) => {
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    return (
        <Container type="Card" id="calculator">
            <ContentContainer 
                type="calculator" isHelpOpen={isHelpOpen} 
                openHelp={() => setIsHelpOpen(help.open())} closeHelp={() => setIsHelpOpen(help.close)}
            >
                <div className="NewContent" id={operation===0 ? "primary" : "secondary"}>
                    <TemplateSelect isSelected={isSelected} onSelect={onSelect} operation={operation} />
                </div>
            </ContentContainer>
        </Container>
    );
};

Calculator.propTypes = {
    isSelected: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired,
    operation: PropTypes.number.isRequired,
};


export default Calculator;