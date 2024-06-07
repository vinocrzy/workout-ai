import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkoutService } from "./workout.service";
import { WorkoutControllerBase } from "./base/workout.controller.base";

@swagger.ApiTags("workouts")
@common.Controller("workouts")
export class WorkoutController extends WorkoutControllerBase {
  constructor(protected readonly service: WorkoutService) {
    super(service);
  }
}
