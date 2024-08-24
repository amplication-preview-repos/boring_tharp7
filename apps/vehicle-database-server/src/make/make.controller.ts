import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MakeService } from "./make.service";
import { MakeControllerBase } from "./base/make.controller.base";

@swagger.ApiTags("makes")
@common.Controller("makes")
export class MakeController extends MakeControllerBase {
  constructor(protected readonly service: MakeService) {
    super(service);
  }
}
