import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RoutineService } from "./routine.service";
import { RoutineControllerBase } from "./base/routine.controller.base";

@swagger.ApiTags("routines")
@common.Controller("routines")
export class RoutineController extends RoutineControllerBase {
  constructor(protected readonly service: RoutineService) {
    super(service);
  }
}
