import { RoutineWhereUniqueInput } from "../routine/RoutineWhereUniqueInput";

export type WorkoutCreateInput = {
  name?: string | null;
  reps?: number | null;
  routine?: RoutineWhereUniqueInput | null;
  sets?: number | null;
  weight?: number | null;
};
