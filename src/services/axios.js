import axiosB from "axios";

const axiosIntegration = axiosB.create({

    baseURL: "http://localhost:3333/",

});

const axios = () => {
    const token = localStorage.getItem('token')
    return axiosIntegration.defaults.headers.common.Authorization = `Bearer ${token}`

}

export default axios;



