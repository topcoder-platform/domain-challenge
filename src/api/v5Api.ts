const { V4_TECHNOLOGIES_API_URL, V4_PLATFORMS_API_URL, V4_CHALLENGE_API_URL } =
  process.env;

import _ from "lodash";
import axios from "axios";

export const getRequest = async (url:string, token:string): Promise<any> => {
  const res = await axios.get(url, { headers: { authorization: `Bearer ${token}` }})
  return res.data;
}
