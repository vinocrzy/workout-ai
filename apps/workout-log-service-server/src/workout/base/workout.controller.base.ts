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
import { WorkoutService } from "../workout.service";
import { WorkoutCreateInput } from "./WorkoutCreateInput";
import { Workout } from "./Workout";
import { WorkoutFindManyArgs } from "./WorkoutFindManyArgs";
import { WorkoutWhereUniqueInput } from "./WorkoutWhereUniqueInput";
import { WorkoutUpdateInput } from "./WorkoutUpdateInput";

export class WorkoutControllerBase {
  constructor(protected readonly service: WorkoutService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Workout })
  async createWorkout(
    @common.Body() data: WorkoutCreateInput
  ): Promise<Workout> {
    return await this.service.createWorkout({
      data: {
        ...data,

        routine: data.routine
          ? {
              connect: data.routine,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Workout] })
  @ApiNestedQuery(WorkoutFindManyArgs)
  async workouts(@common.Req() request: Request): Promise<Workout[]> {
    const args = plainToClass(WorkoutFindManyArgs, request.query);
    return this.service.workouts({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Workout })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async workout(
    @common.Param() params: WorkoutWhereUniqueInput
  ): Promise<Workout | null> {
    const result = await this.service.workout({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Workout })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWorkout(
    @common.Param() params: WorkoutWhereUniqueInput,
    @common.Body() data: WorkoutUpdateInput
  ): Promise<Workout | null> {
    try {
      return await this.service.updateWorkout({
        where: params,
        data: {
          ...data,

          routine: data.routine
            ? {
                connect: data.routine,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Workout })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWorkout(
    @common.Param() params: WorkoutWhereUniqueInput
  ): Promise<Workout | null> {
    try {
      return await this.service.deleteWorkout({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}