import { MakeWhereInput } from "./MakeWhereInput";
import { MakeOrderByInput } from "./MakeOrderByInput";

export type MakeFindManyArgs = {
  where?: MakeWhereInput;
  orderBy?: Array<MakeOrderByInput>;
  skip?: number;
  take?: number;
};
