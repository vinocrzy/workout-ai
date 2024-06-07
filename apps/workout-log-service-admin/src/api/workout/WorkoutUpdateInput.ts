import { RoutineWhereUniqueInput } from "../routine/RoutineWhereUniqueInput";

export type WorkoutUpdateInput = {
  name?: string | null;
  reps?: number | null;
  routine?: RoutineWhereUniqueInput | null;
  sets?: number | null;
  weight?: number | null;
};
