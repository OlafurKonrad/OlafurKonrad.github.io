import React from "react";
import PropTypes from 'prop-types';
import { Typography } from "antd";
import { Help } from "../../Modals";
import { headerInfo } from "../../../constants";
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { Link } from 'react-scroll';

import "./styles.css";

const { Title } = Typography;

const ContentContainer = ({ type, isHelpOpen, openHelp, closeHelp, children }) => {
    const navigate = useNavigate();

    const { title, description, button, id } = headerInfo[type];
    return (
        <div className="ContentContainer" id={id}>
            <div className="Header">
                <Title className="Title">{title}</Title>
                { description ? <Title className="Title" id="description">{description}</Title> : null }
                { button ? 
                    <> 
                        { button.to ?
                            <Link to={button.to} smooth>
                                <Button className="MainButton">{button.title}</Button>
                            </Link>
                        : 
                            <Button className="MainButton" onClick={() => navigate("/")}>
                                {button.title}
                            </Button>
                        }
                        <Button className="MainButton" onClick={openHelp}>Help</Button>
                        <Help isOpen={isHelpOpen} onClose={closeHelp} />
                    </> 
                : null }
            </div>
            {children}
        </div>
    );
};

ContentContainer.propTypes = {
    type: PropTypes.string.isRequired,
    isHelpOpen: PropTypes.bool,
    openHelp: PropTypes.func,
    closeHelp: PropTypes.func,
};

export default ContentContainer;