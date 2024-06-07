import * as graphql from "@nestjs/graphql";
import { RoutineResolverBase } from "./base/routine.resolver.base";
import { Routine } from "./base/Routine";
import { RoutineService } from "./routine.service";

@graphql.Resolver(() => Routine)
export class RoutineResolver extends RoutineResolverBase {
  constructor(protected readonly service: RoutineService) {
    super(service);
  }
}
