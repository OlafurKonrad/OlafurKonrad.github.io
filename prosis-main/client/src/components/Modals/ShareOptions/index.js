import React, { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Modal from '../Modal';
import { MultiEmailInput } from '../../Inputs';
import "./styles.css";

// onClick={() => goForward(2)} id={emailOpen ? "open" : null}
const ShareOptions = ({ isOpen, onClose, goBack, emails, setEmails, updateEmails }) => {
    
    const [emailOpen, setEmailOpen] = useState(false);

    return (
        <Modal
            title="Share" 
            isOpen={isOpen}
            onClose={onClose}
            goBack={goBack}
        >
            <div className="Email ButtonContainer" id={emailOpen ? "open" : null}>
                <div className="ShareButton Email" onClick={() => setEmailOpen(!emailOpen)}>
                    <MdOutlineEmail className="Email Icon" />
                </div>
                <MultiEmailInput emails={emails} setEmails={setEmails} updateEmails={updateEmails} />
            </div>

            <div className="PDF ButtonContainer" id={emailOpen ? "open" : null}>
                <div className="ShareButton PDF">
                    <HiOutlineDocumentDownload className="Icon PDF" />
                </div>
            </div>
        </Modal>
    );
};

export default ShareOptions;
