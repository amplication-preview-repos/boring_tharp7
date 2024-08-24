import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { YearService } from "./year.service";
import { YearControllerBase } from "./base/year.controller.base";

@swagger.ApiTags("years")
@common.Controller("years")
export class YearController extends YearControllerBase {
  constructor(protected readonly service: YearService) {
    super(service);
  }
}
