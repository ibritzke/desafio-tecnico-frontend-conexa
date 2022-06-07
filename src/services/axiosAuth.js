import axios from "axios";

const source = axios.CancelToken.source();

const axiosIntegration = axios.create({
 
  baseURL: "http://localhost:3333/",
 

  cancelToken: source.token,
});

export default axiosIntegration;
