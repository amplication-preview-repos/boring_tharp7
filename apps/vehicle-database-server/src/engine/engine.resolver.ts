import * as graphql from "@nestjs/graphql";
import { EngineResolverBase } from "./base/engine.resolver.base";
import { Engine } from "./base/Engine";
import { EngineService } from "./engine.service";

@graphql.Resolver(() => Engine)
export class EngineResolver extends EngineResolverBase {
  constructor(protected readonly service: EngineService) {
    super(service);
  }
}
