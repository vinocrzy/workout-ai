import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoutineWhereUniqueInput } from "../routine/RoutineWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LogWhereInput = {
  completedWorkouts?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  routine?: RoutineWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
