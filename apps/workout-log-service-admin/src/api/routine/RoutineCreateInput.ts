import { LogCreateNestedManyWithoutRoutinesInput } from "./LogCreateNestedManyWithoutRoutinesInput";
import { WorkoutCreateNestedManyWithoutRoutinesInput } from "./WorkoutCreateNestedManyWithoutRoutinesInput";

export type RoutineCreateInput = {
  logs?: LogCreateNestedManyWithoutRoutinesInput;
  name?: string | null;
  workouts?: WorkoutCreateNestedManyWithoutRoutinesInput;
};
