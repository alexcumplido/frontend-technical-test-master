import axios from "axios";

const ACCES_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

if (!ACCES_TOKEN) throw new Error(`ACESS TOKEN : ${ACCES_TOKEN}.`);

const axiosClient = axios.create({
  headers: {Authorization: `token ${ACCES_TOKEN}`}
},)

export default axiosClient;

