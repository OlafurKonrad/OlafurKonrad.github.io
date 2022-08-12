import { LOCAL_STORAGE_KEY } from "../../constants";
const allTemplates = require("../../constants/Templates");
const INPUTDATA = "_INPUTDATA";
const size = ["small", "medium", "large"];

/* Saves the user's results in localstorage */
const saveInputData = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEY+INPUTDATA, JSON.stringify(data));
};

const validateInputData = (data) => {
    try {
        const dataObj = JSON.parse(data);
        console.log(dataObj)
        const { potroom, casthouse } = dataObj;
        for (const item in potroom) {
            console.log("TYPE - ", typeof potroom[item] )
            if (typeof potroom[item] !== "number") return false;
        }
        for (const item in casthouse) {
            console.log("TYPE - ", typeof casthouse[item] )
            if (typeof casthouse[item] !== "number") return false;
        }

        return dataObj;

    } catch (e) {
        console.log("NOT VALID");
        return false;
    }
};

const getTemplate = (operation, template) => {
    return allTemplates[operation][size[template]];
};

/* Gets uniquePath if any in local storage */
const loadInputData = () => {
    try {
        const data = localStorage.getItem(LOCAL_STORAGE_KEY+INPUTDATA);
        if (!data) return null;
        // let validData = validateInputData(data);
        // if (!validData) return null;
        // return validData;
        return JSON.parse(data);
    } catch (e) {
        return null;
    }
};

const clearInputData = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY+INPUTDATA, JSON.stringify(allTemplates));
};

const inputData = {
    save: saveInputData,
    load: loadInputData,
    clear: clearInputData,
    getTemplate,
};

export default inputData;