import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";

export type MakeWhereInput = {
  active?: BooleanFilter;
  id?: StringFilter;
  make_name?: StringFilter;
};
