import { Routine as TRoutine } from "../api/routine/Routine";

export const ROUTINE_TITLE_FIELD = "name";

export const RoutineTitle = (record: TRoutine): string => {
  return record.name?.toString() || String(record.id);
};
