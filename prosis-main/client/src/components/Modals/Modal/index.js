import React from 'react';
import { Typography } from "antd";
import { IoArrowBackSharp } from "react-icons/io5";
import { CgCloseR } from "react-icons/cg";
import BasicButton from '../../Buttons/BasicButton';
import "./styles.css";
import { Button } from 'antd';
const { Title } = Typography;

const Modal = ({ action, isOpen, goBack, onClose, title, goForward, isDisabled, children, update }) => (
    <>
        <div 
            className="Modal"
            id={action ? "input" : "default"}
            style={{
                transform: isOpen ? 'translateY(0)' : 'translateY(-100vh)',
                opacity : isOpen ? 1 : 0
            }}            
        >
            <IoArrowBackSharp className="ModalBack" id={goBack ? "Back" : "BackDisabled"} onClick={goBack}/>
            <CgCloseR className="ModalClose" id="Close" onClick={onClose}/>
            <Title className="Title" id="modal">{title}</Title>
            { action ? 
            <>
                <div className="ModalContent" id={title}> {children[0]} </div>
                {children[1]}
            </> 
            : <div className="ModalContent" id={title}> {children} </div> }
        </div>
        {isOpen ? <div className="Background" onClick={onClose}></div> : null}
    </>
);

export default Modal;