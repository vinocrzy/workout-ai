import { Log } from "../log/Log";
import { Workout } from "../workout/Workout";

export type Routine = {
  createdAt: Date;
  id: string;
  logs?: Array<Log>;
  name: string | null;
  updatedAt: Date;
  workouts?: Array<Workout>;
};
