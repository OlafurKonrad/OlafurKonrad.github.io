import axios from "axios";
// const URL = process.env.REACT_APP_PROSIS_SERVER_DOMAIN;

const URL = "http://localhost:3500/api/v1";

const createResults = async (operation, payload) => {

    const {data} = await axios.post(`${URL}/result`, {operation, inputData: payload});
    return data.result;
};
const getResults = async (operationId, id) => {
    let operation = operationId===0 ? "primary" : "secondary";
   
    // console.log("GET RESULTS - CLIENT");
    // console.log("operationId - ", operationId);
    // console.log("templateId - ", templateId);

    // const { data } = 
    const type = id.toString();
    
    await axios.get(`${URL}/result/${operation}/${type}`).then(res => {
        console.log(res);
    });    
    // return data.user;
    return null;

};

const resultApi = {
    createResults,
    getResults,
};

export default resultApi;