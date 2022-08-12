import * as React from 'react';
import { ReactMultiEmail, isEmail } from 'react-multi-email';
import 'react-multi-email/style.css';
//import BasicButton from '../../Buttons/BasicButton';
import "./styles.css";
import { Button } from 'antd';

const MultiEmailInput = ({ emails, updateEmails, setEmails }) => (
    <div className="MultiInputContainer">
        <ReactMultiEmail
            className="MultiInput"
            placeholder="Send to..."
            emails={emails}
            onChange={(email) => setEmails(email)}
            validateEmail={email => { return isEmail(email) }}
            getLabel={(email, idx) => (
                <div 
                    data-tag 
                    key={idx}
                >
                    {email}
                    <span data-tag-handle onClick={() => setEmails(emails.filter(item => item !== email))}>
                        ×
                    </span>
                </div>
            )}
        />
        <Button className="MainButton" onClick={() => updateEmails({sharedWithEmails: emails}, true)} id="sendEmail" disabled={emails.length === 0}>Send</Button>
    </div>
);
 
export default MultiEmailInput;