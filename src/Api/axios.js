import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase functions
  //  baseURL: "http://127.0.0.1:5001/clone-c9b33/us-central1/api",
  //we dont have deployed version of firebase function
  //deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-tou5.onrender.com/",
});
export { axiosInstance };
