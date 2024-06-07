import { SortOrder } from "../../util/SortOrder";

export type WorkoutOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  reps?: SortOrder;
  routineId?: SortOrder;
  sets?: SortOrder;
  updatedAt?: SortOrder;
  weight?: SortOrder;
};
