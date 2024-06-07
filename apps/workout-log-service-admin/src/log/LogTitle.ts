import { Log as TLog } from "../api/log/Log";

export const LOG_TITLE_FIELD = "completedWorkouts";

export const LogTitle = (record: TLog): string => {
  return record.completedWorkouts?.toString() || String(record.id);
};
