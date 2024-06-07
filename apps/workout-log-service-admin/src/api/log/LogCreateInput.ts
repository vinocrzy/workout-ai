import { RoutineWhereUniqueInput } from "../routine/RoutineWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LogCreateInput = {
  completedWorkouts?: string | null;
  date?: Date | null;
  routine?: RoutineWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
