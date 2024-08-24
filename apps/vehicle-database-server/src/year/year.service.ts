import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { YearServiceBase } from "./base/year.service.base";

@Injectable()
export class YearService extends YearServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
