import { Log } from "../log/Log";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  logs?: Array<Log>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
