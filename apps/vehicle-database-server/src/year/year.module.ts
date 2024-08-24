import { Module } from "@nestjs/common";
import { YearModuleBase } from "./base/year.module.base";
import { YearService } from "./year.service";
import { YearController } from "./year.controller";
import { YearResolver } from "./year.resolver";

@Module({
  imports: [YearModuleBase],
  controllers: [YearController],
  providers: [YearService, YearResolver],
  exports: [YearService],
})
export class YearModule {}
