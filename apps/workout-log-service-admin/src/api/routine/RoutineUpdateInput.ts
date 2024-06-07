import { LogUpdateManyWithoutRoutinesInput } from "./LogUpdateManyWithoutRoutinesInput";
import { WorkoutUpdateManyWithoutRoutinesInput } from "./WorkoutUpdateManyWithoutRoutinesInput";

export type RoutineUpdateInput = {
  logs?: LogUpdateManyWithoutRoutinesInput;
  name?: string | null;
  workouts?: WorkoutUpdateManyWithoutRoutinesInput;
};
