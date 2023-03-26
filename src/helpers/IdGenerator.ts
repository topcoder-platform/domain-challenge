import { v4 as uuidv4 } from "uuid";
class IdGenerator {
  public generateUUID(): string {
    return uuidv4();
  }
}

export default new IdGenerator();
