import _ from "lodash";
import axios from "axios";

export const getRequest = async (url: string, token: string): Promise<any> => {
  const res = await axios.get(url, { headers: { authorization: `Bearer ${token}` } });
  return res.data;
};
