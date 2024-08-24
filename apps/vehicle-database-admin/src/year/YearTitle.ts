import { Year as TYear } from "../api/year/Year";

export const YEAR_TITLE_FIELD = "id";

export const YearTitle = (record: TYear): string => {
  return record.id?.toString() || String(record.id);
};
