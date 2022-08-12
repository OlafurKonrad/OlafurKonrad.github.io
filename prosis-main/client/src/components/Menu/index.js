import React from "react";
import { Link } from 'react-scroll';
import Container from "../Containers/Container";
import { MdOutlineCalculate, MdOutlineInsertChartOutlined, MdOutlineFileDownload } from "react-icons/md";
import "./styles.css";

const Menu = () => (
    <Container type="Menu">
        <div className="MenuButtons" id="menuButtons">
            <Link activeClass="active" to="calculator" spy={true} smooth={true} id="menuLinkCalculator">
                <div className="MenuButtonContainer">
                    <div className="MenuButton">                   
                        <div id="boxSize"></div>
                        <MdOutlineCalculate className="MenuIcon" />
                    </div>
                </div>
            </Link>
            <Link activeClass="active" to="results" spy={true} smooth={true} id="menuLinkResults">
                <div className="MenuButtonContainer">
                    <div className="MenuButton">
                        <div id="boxSize"></div>
                        <MdOutlineInsertChartOutlined className="MenuIcon" />
                    </div>
                </div>
            </Link>
            <Link activeClass="active" to="share" spy={true} smooth={true} id="menuLinkShare">
                <div className="MenuButtonContainer">
                    <div className="MenuButton">
                        <div id="boxSize"></div>
                        <MdOutlineFileDownload className="MenuIcon" />
                    </div>
                </div>
            </Link>
        </div>
    </Container>
);

export default Menu;