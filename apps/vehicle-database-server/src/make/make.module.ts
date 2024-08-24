import { Module } from "@nestjs/common";
import { MakeModuleBase } from "./base/make.module.base";
import { MakeService } from "./make.service";
import { MakeController } from "./make.controller";
import { MakeResolver } from "./make.resolver";

@Module({
  imports: [MakeModuleBase],
  controllers: [MakeController],
  providers: [MakeService, MakeResolver],
  exports: [MakeService],
})
export class MakeModule {}
