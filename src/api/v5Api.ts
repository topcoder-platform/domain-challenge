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
    `${process.env.TOPCODER_API_URL}/resources?challengeId=${challengeId}&roleId=${roleId}`,
    token
  );
  return resources;
};

// This function is called when a challenge completes, to load submission and review data
// from Informix to ES.  It only needs to be called once, so we do it when the challenge completes
export const loadInformixSubmissions = async (
  challengeId: string,
  token: string
): Promise<any> => {
  await getRequest(
    `${process.env.TOPCODER_API_URL}/submissions?challengeId=${challengeId}&loadLegacy=true`,
    token
  );
};