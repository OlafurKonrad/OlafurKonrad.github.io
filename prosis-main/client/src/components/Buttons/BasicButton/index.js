import React from "react";
import { Link } from 'react-scroll';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import "./styles.css";

const BasicButton = ({ to, id, disabled, children, onClick }) => {
    const navigate = useNavigate();
    
    return (
        <>
            { to
            ? <Link to={to} smooth>
                <Button className="MainButton" id={id}>{children}</Button>
            </Link> 
            : <Button 
                className="MainButton" 
                id={id} 
                disabled={disabled}
                onClick={onClick}
                >
                    {children}
            </Button> }
        </> 
    );
}

export default BasicButton;