/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Routine as PrismaRoutine,
  Log as PrismaLog,
  Workout as PrismaWorkout,
} from "@prisma/client";

export class RoutineServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RoutineCountArgs, "select">): Promise<number> {
    return this.prisma.routine.count(args);
  }

  async routines<T extends Prisma.RoutineFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoutineFindManyArgs>
  ): Promise<PrismaRoutine[]> {
    return this.prisma.routine.findMany<Prisma.RoutineFindManyArgs>(args);
  }
  async routine<T extends Prisma.RoutineFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoutineFindUniqueArgs>
  ): Promise<PrismaRoutine | null> {
    return this.prisma.routine.findUnique(args);
  }
  async createRoutine<T extends Prisma.RoutineCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoutineCreateArgs>
  ): Promise<PrismaRoutine> {
    return this.prisma.routine.create<T>(args);
  }
  async updateRoutine<T extends Prisma.RoutineUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoutineUpdateArgs>
  ): Promise<PrismaRoutine> {
    return this.prisma.routine.update<T>(args);
  }
  async deleteRoutine<T extends Prisma.RoutineDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoutineDeleteArgs>
  ): Promise<PrismaRoutine> {
    return this.prisma.routine.delete(args);
  }

  async findLogs(
    parentId: string,
    args: Prisma.LogFindManyArgs
  ): Promise<PrismaLog[]> {
    return this.prisma.routine
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .logs(args);
  }

  async findWorkouts(
    parentId: string,
    args: Prisma.WorkoutFindManyArgs
  ): Promise<PrismaWorkout[]> {
    return this.prisma.routine
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .workouts(args);
  }
}