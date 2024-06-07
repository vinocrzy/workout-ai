import { SortOrder } from "../../util/SortOrder";

export type LogOrderByInput = {
  completedWorkouts?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  routineId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
