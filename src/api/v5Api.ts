import _ from "lodash";
import axios from "axios";

export const getRequest = async (url: string, token: string): Promise<any> => {
  const res = await axios.get(url, { headers: { authorization: `Bearer ${token}` } });
  return res.data;
};

export const getChallengeResources = async (
  challengeId: string,
  roleId: string,
  token: string
): Promise<any> => {
  const resources = await getRequest(
    `${process.env.TOPCODER_API_URL}/resources?challengeId=${challengeId}}&roleId=${roleId}`,
    token
  );
  return resources;
};
