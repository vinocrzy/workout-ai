/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RoutineService } from "../routine.service";
import { RoutineCreateInput } from "./RoutineCreateInput";
import { Routine } from "./Routine";
import { RoutineFindManyArgs } from "./RoutineFindManyArgs";
import { RoutineWhereUniqueInput } from "./RoutineWhereUniqueInput";
import { RoutineUpdateInput } from "./RoutineUpdateInput";
import { LogFindManyArgs } from "../../log/base/LogFindManyArgs";
import { Log } from "../../log/base/Log";
import { LogWhereUniqueInput } from "../../log/base/LogWhereUniqueInput";
import { WorkoutFindManyArgs } from "../../workout/base/WorkoutFindManyArgs";
import { Workout } from "../../workout/base/Workout";
import { WorkoutWhereUniqueInput } from "../../workout/base/WorkoutWhereUniqueInput";

export class RoutineControllerBase {
  constructor(protected readonly service: RoutineService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Routine })
  async createRoutine(
    @common.Body() data: RoutineCreateInput
  ): Promise<Routine> {
    return await this.service.createRoutine({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Routine] })
  @ApiNestedQuery(RoutineFindManyArgs)
  async routines(@common.Req() request: Request): Promise<Routine[]> {
    const args = plainToClass(RoutineFindManyArgs, request.query);
    return this.service.routines({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Routine })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async routine(
    @common.Param() params: RoutineWhereUniqueInput
  ): Promise<Routine | null> {
    const result = await this.service.routine({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Routine })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRoutine(
    @common.Param() params: RoutineWhereUniqueInput,
    @common.Body() data: RoutineUpdateInput
  ): Promise<Routine | null> {
    try {
      return await this.service.updateRoutine({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Routine })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRoutine(
    @common.Param() params: RoutineWhereUniqueInput
  ): Promise<Routine | null> {
    try {
      return await this.service.deleteRoutine({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/logs")
  @ApiNestedQuery(LogFindManyArgs)
  async findLogs(
    @common.Req() request: Request,
    @common.Param() params: RoutineWhereUniqueInput
  ): Promise<Log[]> {
    const query = plainToClass(LogFindManyArgs, request.query);
    const results = await this.service.findLogs(params.id, {
      ...query,
      select: {
        completedWorkouts: true,
        createdAt: true,
        date: true,
        id: true,

        routine: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/logs")
  async connectLogs(
    @common.Param() params: RoutineWhereUniqueInput,
    @common.Body() body: LogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      logs: {
        connect: body,
      },
    };
    await this.service.updateRoutine({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/logs")
  async updateLogs(
    @common.Param() params: RoutineWhereUniqueInput,
    @common.Body() body: LogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      logs: {
        set: body,
      },
    };
    await this.service.updateRoutine({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/logs")
  async disconnectLogs(
    @common.Param() params: RoutineWhereUniqueInput,
    @common.Body() body: LogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      logs: {
        disconnect: body,
      },
    };
    await this.service.updateRoutine({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/workouts")
  @ApiNestedQuery(WorkoutFindManyArgs)
  async findWorkouts(
    @common.Req() request: Request,
    @common.Param() params: RoutineWhereUniqueInput
  ): Promise<Workout[]> {
    const query = plainToClass(WorkoutFindManyArgs, request.query);
    const results = await this.service.findWorkouts(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        name: true,
        reps: true,

        routine: {
          select: {
            id: true,
          },
        },

        sets: true,
        updatedAt: true,
        weight: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/workouts")
  async connectWorkouts(
    @common.Param() params: RoutineWhereUniqueInput,
    @common.Body() body: WorkoutWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workouts: {
        connect: body,
      },
    };
    await this.service.updateRoutine({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/workouts")
  async updateWorkouts(
    @common.Param() params: RoutineWhereUniqueInput,
    @common.Body() body: WorkoutWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workouts: {
        set: body,
      },
    };
    await this.service.updateRoutine({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/workouts")
  async disconnectWorkouts(
    @common.Param() params: RoutineWhereUniqueInput,
    @common.Body() body: WorkoutWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workouts: {
        disconnect: body,
      },
    };
    await this.service.updateRoutine({
      where: params,
      data,
      select: { id: true },
    });
  }
}
