import * as graphql from "@nestjs/graphql";
import { MakeResolverBase } from "./base/make.resolver.base";
import { Make } from "./base/Make";
import { MakeService } from "./make.service";

@graphql.Resolver(() => Make)
export class MakeResolver extends MakeResolverBase {
  constructor(protected readonly service: MakeService) {
    super(service);
  }
}
