const { AUTH0_URL, AUTH0_AUDIENCE, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, AUTH0_PROXY_SERVER_URL } =
  process.env;

import _ from "lodash";
const m2mAuth = require("tc-core-library-js").auth.m2m;

class Machine2MachineToken {
  m2m: any;

  constructor() {
    this.m2m = m2mAuth({
      AUTH0_URL,
      AUTH0_AUDIENCE,
      AUTH0_PROXY_SERVER_URL,
    });
  }

  async getM2MToken(): Promise<string> {
    return this.m2m.getMachineToken(AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET);
  }
}

export default new Machine2MachineToken();
