import { Module } from "@nestjs/common";
import { EngineModuleBase } from "./base/engine.module.base";
import { EngineService } from "./engine.service";
import { EngineController } from "./engine.controller";
import { EngineResolver } from "./engine.resolver";

@Module({
  imports: [EngineModuleBase],
  controllers: [EngineController],
  providers: [EngineService, EngineResolver],
  exports: [EngineService],
})
export class EngineModule {}
