import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MakeServiceBase } from "./base/make.service.base";

@Injectable()
export class MakeService extends MakeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
