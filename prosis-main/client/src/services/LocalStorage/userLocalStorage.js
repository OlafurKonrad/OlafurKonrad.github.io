import { LOCAL_STORAGE_KEY } from "../../constants";

const USER = "_USER";

const default_userInfo = {
    sharedWithEmails: [],
    terms: false,
    uniquePath: "",
    operation: 0,
    template: -1, // Starting value is -1 to indicate that a template hasn't been selected
    user: {
        firstName: "",
        lastName: "",
        company: "",
        position: "",
        email: ""
    }
};

/* Saves the user's information in localstorage */
export const saveUser = (data=default_userInfo) => {
    // console.log("SAVE", data);
    localStorage.setItem(LOCAL_STORAGE_KEY+USER, JSON.stringify(data));
};


const validateUser = (data) => {
    try {
        const dataObj = JSON.parse(data);

        // if (type==="user") {
            if (typeof dataObj.sharedWithEmails !== "object") return false;
            if (typeof dataObj.terms !== "boolean") return false;
            if (typeof dataObj.uniquePath !== "string") return false;
            if (typeof dataObj.operation !== "number") return false;
            if (typeof dataObj.template !== "number") return false;
            if (typeof dataObj.user.firstName !== "string") return false;
            if (typeof dataObj.user.lastName !== "string") return false;
            if (typeof dataObj.user.company !== "string") return false;
            if (typeof dataObj.user.position !== "string") return false;
            if (typeof dataObj.user.email !== "string") return false;
        // }

        return dataObj;

    } catch (e) {
        // console.log("NOT VALID")
        return false;
    }
};

/* Gets uniquePath if any in local storage */
export const loadUser = () => {
    try {
        const data = localStorage.getItem(LOCAL_STORAGE_KEY+USER);
        if (!data) return false;

        let validData = validateUser(data);
        if (!validData) return null;

        return validData;
    } catch (e) {
        return null;
    }
};

// const updateUser = (new_data) => {
//     const data = loadUser();
//     console.log("DATA", data);
//     console.log("NEW DATA", new_data);

//     // localStorage.setItem(LOCAL_STORAGE_KEY+USER, JSON.stringify(data));
// };
export const clearUser = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY+USER, JSON.stringify(default_userInfo));
};

const userLocalStorage = {
    save: saveUser,
    load: loadUser,
    clear: clearUser,
    // update: updateUser,
    default: default_userInfo,
};

export default userLocalStorage;