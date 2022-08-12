import axios from "axios";
// const URL = process.env.REACT_APP_PROSIS_SERVER_DOMAIN;

const URL = "http://localhost:3500/api/v1";


const getInputData = async (operationId, id) => {
    // const operation = operationId ? "secondary" : "primary";
    const { data } = await axios.get(`${URL}/input/${operationId}/${id}`);
    return data.user;
};

const inputDataApi = {
    getInputData,
};

export default inputDataApi;