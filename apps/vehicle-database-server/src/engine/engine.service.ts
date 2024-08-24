import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EngineServiceBase } from "./base/engine.service.base";

@Injectable()
export class EngineService extends EngineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
