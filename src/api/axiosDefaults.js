import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL || "http://localhost:8000";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
