import { YearWhereInput } from "./YearWhereInput";
import { YearOrderByInput } from "./YearOrderByInput";

export type YearFindManyArgs = {
  where?: YearWhereInput;
  orderBy?: Array<YearOrderByInput>;
  skip?: number;
  take?: number;
};
