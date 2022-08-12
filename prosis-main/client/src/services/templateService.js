import axios from "axios";
// const URL = process.env.REACT_APP_PROSIS_SERVER_DOMAIN;

const URL = "http://localhost:3500/api/v1";

const createTemplates = async (payload) => {
    console.log("CREATE TEMPLATES - ", payload);

    // const {data} = 
    await axios.post(`${URL}/template`, payload);
    // return data.id;
};
const getTemplate = async (operationId, id) => {
    let operation = operationId===0 ? "primary" : "secondary";
   
    // console.log("GET RESULTS - CLIENT");
    // console.log("operationId - ", operationId);
    // console.log("templateId - ", templateId);

    // const { data } = 
    const type = id.toString();
    
    await axios.get(`${URL}/template/${operation}/${type}`).then(res => {
        console.log(res);
    });    
    // return data.user;
    return null;

};

const templateApi = {
    createTemplates,
    getTemplate,
};

export default templateApi;