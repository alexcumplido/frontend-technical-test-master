import axios from "axios";

import { ACCESS_TOKEN } from "../constants/constants.js";

if (!ACCESS_TOKEN) throw new Error(`ACESS TOKEN : ${ACCESS_TOKEN}.`);

export const clientAxios = axios.create({
  headers: { Authorization: `token ${ACCESS_TOKEN}` },
});
