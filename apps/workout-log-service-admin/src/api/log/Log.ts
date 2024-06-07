import { Routine } from "../routine/Routine";
import { User } from "../user/User";

export type Log = {
  completedWorkouts: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  routine?: Routine | null;
  updatedAt: Date;
  user?: User | null;
};
