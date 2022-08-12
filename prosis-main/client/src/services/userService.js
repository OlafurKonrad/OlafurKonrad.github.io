import axios from "axios";
// const URL = process.env.REACT_APP_PROSIS_SERVER_DOMAIN;

const URL = "http://localhost:3500/api/v1";

const createUser = async (payload) => {
    const {data} = await axios.post(`${URL}/user`, payload);
    return data.id;
};

const getUserById = async (id) => {
    const { data } = await axios.get(`${URL}/user/${id}`);
    return data.user;
};

const updateUserById = async (id, payload) => {
    await axios.put(`${URL}/user/${id}`, payload);
}

const userApi = {
    createUser,
    getUserById,
    updateUserById,
};

export default userApi;