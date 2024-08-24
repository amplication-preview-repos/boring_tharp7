import * as graphql from "@nestjs/graphql";
import { YearResolverBase } from "./base/year.resolver.base";
import { Year } from "./base/Year";
import { YearService } from "./year.service";

@graphql.Resolver(() => Year)
export class YearResolver extends YearResolverBase {
  constructor(protected readonly service: YearService) {
    super(service);
  }
}
