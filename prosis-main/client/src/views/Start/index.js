

import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Typography, Button } from 'antd';
import Container from "../../components/Containers/Container";
import { OperationType } from "../../components/SelectionButtons";
import { useNavigate } from 'react-router-dom';
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import "./styles.css"

const { Title, Text } = Typography;


const Start = ({ userInfo, updateValues })  => {
    const navigate = useNavigate();

    const [terms, setTerms] = useState(userInfo.terms);
    const [operation, setOperation] = useState(userInfo.operation);
    
    useEffect(() => {
        setTerms(userInfo.terms);
        setOperation(userInfo.operation);
    }, [userInfo]);

    return (        
        <>
        { typeof operation !== "undefined" ?

        <Container type="Start">
            <Title level={1} onClick={() => localStorage.clear()}>ProSIS</Title>
            <Title level={2} onClick={() => test()}>
                Uncover {"&"} discover your operation's possible increased value with DTE<br/>
                How it can be monetized, how it will increase sustainability {"&"} positive environmental impact
            </Title>

            <Title level={3}>Select your type of operation</Title>
            <OperationType isSelected={operation} onSelect={setOperation} update={updateValues} />
            <div className="TermsAndConditions">
                { terms
                    ? <ImCheckboxChecked className="Checkbox" id="checked" onClick={() => {setTerms(!terms); updateValues({terms: !terms})}} />
                    : <ImCheckboxUnchecked className="Checkbox" onClick={() => {setTerms(!terms); updateValues({terms: !terms})}} /> }  
                <Text>I agree to the Terms of service and Privacy Policy</Text>
            </div>
            <Button 
                className="MainButton"
                id="Begin" 
                disabled={!terms}
                onClick={() => navigate(`/prosis/${userInfo.uniquePath}`)}
                >
                    BEGIN PROFITABILITY ANALYSIS
            </Button>
        </Container>
        : null }
        </>
    );
}


Start.propTypes = {
    userInfo: PropTypes.object.isRequired,
    updateValues: PropTypes.func.isRequired,
};

export default Start;