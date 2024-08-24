import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EngineService } from "./engine.service";
import { EngineControllerBase } from "./base/engine.controller.base";

@swagger.ApiTags("engines")
@common.Controller("engines")
export class EngineController extends EngineControllerBase {
  constructor(protected readonly service: EngineService) {
    super(service);
  }
}
