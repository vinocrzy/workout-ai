import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RoutineWhereUniqueInput } from "../routine/RoutineWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type WorkoutWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  reps?: IntNullableFilter;
  routine?: RoutineWhereUniqueInput;
  sets?: IntNullableFilter;
  weight?: FloatNullableFilter;
};
