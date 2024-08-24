/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Year } from "./Year";
import { YearCountArgs } from "./YearCountArgs";
import { YearFindManyArgs } from "./YearFindManyArgs";
import { YearFindUniqueArgs } from "./YearFindUniqueArgs";
import { DeleteYearArgs } from "./DeleteYearArgs";
import { YearService } from "../year.service";
@graphql.Resolver(() => Year)
export class YearResolverBase {
  constructor(protected readonly service: YearService) {}

  async _yearsMeta(
    @graphql.Args() args: YearCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Year])
  async years(@graphql.Args() args: YearFindManyArgs): Promise<Year[]> {
    return this.service.years(args);
  }

  @graphql.Query(() => Year, { nullable: true })
  async year(@graphql.Args() args: YearFindUniqueArgs): Promise<Year | null> {
    const result = await this.service.year(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Year)
  async deleteYear(@graphql.Args() args: DeleteYearArgs): Promise<Year | null> {
    try {
      return await this.service.deleteYear(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
