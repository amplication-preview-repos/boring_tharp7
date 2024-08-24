import { Make as TMake } from "../api/make/Make";

export const MAKE_TITLE_FIELD = "make_name";

export const MakeTitle = (record: TMake): string => {
  return record.make_name?.toString() || String(record.id);
};
