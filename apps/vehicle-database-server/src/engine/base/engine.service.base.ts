/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Engine as PrismaEngine } from "@prisma/client";

export class EngineServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.EngineCountArgs, "select">): Promise<number> {
    return this.prisma.engine.count(args);
  }

  async engines(args: Prisma.EngineFindManyArgs): Promise<PrismaEngine[]> {
    return this.prisma.engine.findMany(args);
  }
  async engine(
    args: Prisma.EngineFindUniqueArgs
  ): Promise<PrismaEngine | null> {
    return this.prisma.engine.findUnique(args);
  }
  async createEngine(args: Prisma.EngineCreateArgs): Promise<PrismaEngine> {
    return this.prisma.engine.create(args);
  }
  async updateEngine(args: Prisma.EngineUpdateArgs): Promise<PrismaEngine> {
    return this.prisma.engine.update(args);
  }
  async deleteEngine(args: Prisma.EngineDeleteArgs): Promise<PrismaEngine> {
    return this.prisma.engine.delete(args);
  }
}