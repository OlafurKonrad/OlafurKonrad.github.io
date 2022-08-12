import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Container from "../../../components/Containers/Container";
import ContactInfo from "../../../components/ContactInfo";
import { ShareModal } from "../../../components/Modals";
import ContentContainer from "../../../components/Containers/ContentContainer";
import { Button } from "antd";
import "./styles.css";

const modalRoute = [];
const Share = ({ userInfo, updateValues, inputData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [curModalID, setCurModalID] = useState(0);
    const [user, setUser] = useState(userInfo.user);
    const [sharedWithEmails, setSharedWithEmails] = useState(userInfo.sharedWithEmails);

    useEffect(() => {
        // console.log("SHARE - ", userInfo);
        setUser(userInfo.user);
        setSharedWithEmails(userInfo.sharedWithEmails);
    }, [userInfo]);

    const openModal = (ID) => {
        document.body.style.overflow="hidden"; 
        modalRoute.push(ID);
        setCurModalID(ID);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        document.body.style.overflow="";
        setIsModalOpen(false);
    };

    const goForward = (toID) => {
        modalRoute.push(toID);
        setCurModalID(toID);
    };

    const goBack = () => {
        modalRoute.pop(curModalID);
        setCurModalID(modalRoute.at(-1));
    };
    // const setValue = (e) => {
    //     setUser({...user, [e.target.name]: e.target.value });
    // };
   
    return (
        <Container type="Card" id="share">
            { inputData ?
                    <ContentContainer type="share">
                    <div className="NewContent">
                        <div className="ShareButtonContainer">
                            <Button className="MainButton" onClick={() => openModal(0)}>Share {"&"} Download Results</Button>
                            <ShareModal 
                                modalID={curModalID} 
                                isOpen={isModalOpen} 
                                onClose={closeModal} 
                                goForward={goForward} 
                                goBack={goBack} 
                                // user={user}
                                // setValue={setValue}
                                sharedWithEmails={sharedWithEmails}
                                setSharedWithEmails={setSharedWithEmails}
                                updateValues={updateValues}
                                userInfo={userInfo}
                            />
                        </div>
                        <ContactInfo id="main" />
                    </div>
                    </ContentContainer>
            : null }
        </Container>
    );
}

Share.propTypes = {
    userInfo: PropTypes.object.isRequired,
    updateValues: PropTypes.func.isRequired,
};

export default Share;