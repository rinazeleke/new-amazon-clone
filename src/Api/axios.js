import axios from "axios";

const axiosInstance = axios.create({
  //deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deployed.onrender.com",
});

export { axiosInstance };
