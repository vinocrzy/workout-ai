import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RoutineServiceBase } from "./base/routine.service.base";

@Injectable()
export class RoutineService extends RoutineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
