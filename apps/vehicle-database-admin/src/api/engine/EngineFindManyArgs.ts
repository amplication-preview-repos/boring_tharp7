import { EngineWhereInput } from "./EngineWhereInput";
import { EngineOrderByInput } from "./EngineOrderByInput";

export type EngineFindManyArgs = {
  where?: EngineWhereInput;
  orderBy?: Array<EngineOrderByInput>;
  skip?: number;
  take?: number;
};
