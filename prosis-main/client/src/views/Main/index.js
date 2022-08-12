import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Container from "../../components/Containers/Container";
import { Calculator, Results, Share } from "../pages";
import Menu from "../../components/Menu";
import { input } from "../../services/LocalStorage";

const Main = ({ userInfo, updateValues }) => {
    useEffect(() => {
        if (userInfo.template !== -1) document.body.style.overflow="";
        else document.body.style.overflow="hidden";
    }, [userInfo.template]);

    const getInputData = () => {
        const localData = input.load();
        if (localData) return localData;
        return null;
    };

    const [inputData, setInputData] = useState(getInputData());

    const saveData = (new_data) => {
        input.save(new_data);
        const data = getInputData();
        setInputData(data);
    };
 
    const onTemplateSelect = (id) => {
        updateValues({template: id});
        saveData(input.getTemplate(userInfo.operation, id));
    };

    return (
        <Container type="Main" id={userInfo.template === -1 ? "initial" : null}>
            <Menu />
            <Calculator isSelected={userInfo.template} onSelect={onTemplateSelect} operation={userInfo.operation} />
            <Results inputData={inputData} saveData={saveData} operation={userInfo.operation}/>
            <Share userInfo={userInfo} updateValues={updateValues} inputData={inputData} />   
        </Container>
    );
};

Main.propTypes = {
    userInfo: PropTypes.object.isRequired,
    updateValues: PropTypes.func.isRequired,
};

export default Main;