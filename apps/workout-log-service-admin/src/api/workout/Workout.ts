import { Routine } from "../routine/Routine";

export type Workout = {
  createdAt: Date;
  id: string;
  name: string | null;
  reps: number | null;
  routine?: Routine | null;
  sets: number | null;
  updatedAt: Date;
  weight: number | null;
};
