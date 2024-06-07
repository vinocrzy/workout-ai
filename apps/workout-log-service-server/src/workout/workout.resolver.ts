import * as graphql from "@nestjs/graphql";
import { WorkoutResolverBase } from "./base/workout.resolver.base";
import { Workout } from "./base/Workout";
import { WorkoutService } from "./workout.service";

@graphql.Resolver(() => Workout)
export class WorkoutResolver extends WorkoutResolverBase {
  constructor(protected readonly service: WorkoutService) {
    super(service);
  }
}
