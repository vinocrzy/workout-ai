import { Module } from "@nestjs/common";
import { WorkoutModuleBase } from "./base/workout.module.base";
import { WorkoutService } from "./workout.service";
import { WorkoutController } from "./workout.controller";
import { WorkoutResolver } from "./workout.resolver";

@Module({
  imports: [WorkoutModuleBase],
  controllers: [WorkoutController],
  providers: [WorkoutService, WorkoutResolver],
  exports: [WorkoutService],
})
export class WorkoutModule {}
