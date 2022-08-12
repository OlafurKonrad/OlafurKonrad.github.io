import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ShareOptions from '../ShareOptions';
import GeneralInfo from '../GeneralInfo';
import EmailShare from '../EmailShare';
import Confirm from '../Confirm';
import "./styles.css";

const ShareModal = ({ 
    modalID, isOpen, onClose, goForward, goBack, 
    sharedWithEmails, setSharedWithEmails, updateValues, userInfo,
    // setValue, user,
 }) => {
    const [allAnswered, SetAllAnswered] = useState(false);
    const [user, setUser] = useState(userInfo.user);
    useEffect(() => {
        // console.log("SHARE MODAL - ", user);
        SetAllAnswered(Object.values(user).includes(""));
    }, [user]);
    const setValue = (e) => {
        setUser({...user, [e.target.name]: e.target.value });
    };

    return (
        <>
            { modalID === 0 ?
                <GeneralInfo 
                    isOpen={isOpen} onClose={onClose} goForward={goForward} 
                    user={user} setValue={setValue} isDisabled={allAnswered}
                    //updateValues={sendToDb}
                    updateValues={updateValues}
                /> : <></> }
            { modalID === 1 ? 
                <ShareOptions 
                    isOpen={isOpen} onClose={onClose} goBack={goBack} goForward={goForward} 
                    emails={sharedWithEmails} setEmails={setSharedWithEmails} updateEmails={updateValues}
                /> : <></> }
            { modalID === 2 ? <EmailShare isOpen={isOpen} onClose={onClose} goBack={goBack} goForward={goForward} /> : <></> }
            { modalID === 3 ? <Confirm isOpen={isOpen} onClose={onClose} /> : <></> }
        </>
    );
};

ShareModal.propTypes = {
    modalID: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    goForward: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
};

export default ShareModal;