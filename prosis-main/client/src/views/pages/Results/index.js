import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Typography } from "antd";
import Container from "../../../components/Containers/Container";
import "./styles.css";
import { ResultInputAccordion } from "../../../components/ResultComponents/ResultInputAccordion"
import { ResultType } from "../../../components/SelectionButtons";
import ResultTab from "../../../components/ResultTab";
import ContentContainer from "../../../components/Containers/ContentContainer";
import modal from "../../../services";
import resultApi from "../../../services/resultService";
const { Title } = Typography;
const { help } = modal;

const Results = ({ inputData, saveData, operation }) => {

    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [selectedResultID, setSelectedResultID] = useState(2);
    const [results, setResults] = useState(null);
    
    useEffect(() => {
        if (inputData) {
            const fetchData = async () => {
                await resultApi.createResults(operation, inputData).then((res) => {
                    setResults(res);
                });
            };
            fetchData().catch(console.error);
        }
    }, [inputData]);


    return (
        <Container type="Card" id="results" >
            { results ?
                <ContentContainer 
                    type="results" isHelpOpen={isHelpOpen}
                    openHelp={() => setIsHelpOpen(help.open())}
                    closeHelp={() => setIsHelpOpen(help.close())}
                >
                    <div className="NewContent">
                        <div className="Container" id="InputWindow">
                            <Title level={2} className="ResTitle">Interactive Variables</Title>
                            <div className="Container" id="InputButtons">
                                <ResultType resultID={2} isSelected={selectedResultID===2} onSelect={() => setSelectedResultID(2)} smelterType={operation} />
                                { operation===0 ? <ResultType resultID={0} isSelected={selectedResultID===0} onSelect={() => setSelectedResultID(0)} smelterType={operation} /> : null }
                                <ResultType resultID={1} isSelected={selectedResultID===1} onSelect={() => setSelectedResultID(1)} smelterType={operation} />
                            </div>
                            <ResultInputAccordion 
                                catID={selectedResultID}
                                smelterType={operation}
                                setResultData2={saveData}
                                inputData2={inputData}
                            />
                        </div>
                        <ResultTab resultID={selectedResultID} results={results} smelterType={operation}  />
                    </div>
                </ContentContainer>
            : null }
        </Container>
    );
}

Results.propTypes = {
    inputData: PropTypes.object,
    saveData: PropTypes.func.isRequired,
    operation: PropTypes.number.isRequired,
};


export default Results;