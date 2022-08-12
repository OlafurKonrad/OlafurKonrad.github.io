import React, {useEffect} from 'react';
import Modal from '../Modal';
import { InfoInput } from '../../Inputs';
import { defaultUserInput } from '../../../constants/User';
import { Button } from 'antd';

import "./styles.css";

const GeneralInfo = ({ 
    isOpen, onClose, goForward, user, setValue, isDisabled, updateValues,
}) => {
    // useEffect(() => {
    //     console.log("GEN INFO", user);
    // }, [user]);
    return (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="General Information" 
        action="Confirm"
    >
        {/* <div onClick={() => goForward(1)}>ÁFRAM</div> */}
        {Object.keys(defaultUserInput).map((key, index) => {
            return (
                <InfoInput 
                    key={index}
                    name={key}
                    placeholder={defaultUserInput[key].placeholder}
                    value={user[key]}
                    setValue={setValue}
                />
            );
        })}
        <Button 
            className="MainButton"
            id="modalButton" 
            onClick={() => { goForward(1); updateValues({user}, true) }} 
            disabled={isDisabled}
        >
            Confirm
        </Button>
    </Modal>
);}

export default GeneralInfo;
