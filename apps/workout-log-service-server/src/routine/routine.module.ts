import { Module } from "@nestjs/common";
import { RoutineModuleBase } from "./base/routine.module.base";
import { RoutineService } from "./routine.service";
import { RoutineController } from "./routine.controller";
import { RoutineResolver } from "./routine.resolver";

@Module({
  imports: [RoutineModuleBase],
  controllers: [RoutineController],
  providers: [RoutineService, RoutineResolver],
  exports: [RoutineService],
})
export class RoutineModule {}
