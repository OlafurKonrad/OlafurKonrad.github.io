import "./App.css";
import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import {
  Routes, Route, Navigate, BrowserRouter as Router,
} from 'react-router-dom';
import Start from "./views/Start";
import Main from "./views/Main";
import Container from "./components/Containers/Container";
import userApi from "./services/userService";
import { checkIfChanged, isEmpty } from "./services";
import "./styles/base.css";

import { user } from "./services/LocalStorage";

const App = () => {
    const checkIfSaved = () => {
        const localUserData = user.load();
        if (localUserData) return localUserData;
        return user.default;
    };

    const [userInfo, setUserInfo] = useState(checkIfSaved());

    const updateUserInfo = (new_values) => {
        setUserInfo({...userInfo, ...new_values});
    };
 
    const saveToDB = async (info, toChange) => {
        if (typeof userInfo.id === "undefined") {
                const {user} = toChange;
                const data = {...info, ...user};
                await userApi.createUser(data).then((res) => {
                    updateUserInfo({id: res});
                });
        }
        else await userApi.updateUserById(userInfo.id, {...info, ...toChange});
    }
    const updateValues = async (new_values, save_to_db=false) => {
        // console.log(new_values);
        let toChange = new_values;
        let noChange = Object.keys(toChange).filter(x => checkIfChanged(toChange[x], userInfo[x]));
        for (var i=0; i<noChange.length; i++) delete toChange[noChange[i]];
        if (!isEmpty(toChange)) {
            updateUserInfo(toChange);
            // console.log("UPDATE VALUES");
            user.save({...userInfo, ...toChange});
            if (save_to_db) {
                saveToDB(userInfo, toChange).catch(console.error);
            }
            
        }
    };

    const saveData = () => {
        user.save({...user.default, uniquePath: uuid()});
        setUserInfo(checkIfSaved());
    };

    useEffect(() => {
        if (userInfo.uniquePath === "") saveData();
        // if (isEmpty(allTemplates)) {
        //     const getTemplates = async () => {
        //         await templates.getAllTemplates().then((res) => {
        //             setAllTemplates(res);
        //         });
        //     };
        //     getTemplates().catch(console.error);
        // }
    }, []);
    
    return (
        <Container type="Master">
            <Router>
                <Routes>
                    <Route path="/prosis" element={<Start userInfo={userInfo}  updateValues={updateValues} />} />
                    <Route path="/" element={<Navigate replace to="/prosis" />} />
                    { userInfo.terms ? <Route path="/prosis/:uniquePath" element={<Main userInfo={userInfo} updateValues={updateValues}  />} /> : null}
                </Routes>
            </Router>
        </Container>    
    );
}

export default App;