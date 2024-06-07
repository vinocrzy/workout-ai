import { StringFilter } from "../../util/StringFilter";
import { LogListRelationFilter } from "../log/LogListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WorkoutListRelationFilter } from "../workout/WorkoutListRelationFilter";

export type RoutineWhereInput = {
  id?: StringFilter;
  logs?: LogListRelationFilter;
  name?: StringNullableFilter;
  workouts?: WorkoutListRelationFilter;
};
