import { RoutineWhereInput } from "./RoutineWhereInput";
import { RoutineOrderByInput } from "./RoutineOrderByInput";

export type RoutineFindManyArgs = {
  where?: RoutineWhereInput;
  orderBy?: Array<RoutineOrderByInput>;
  skip?: number;
  take?: number;
};
