import { Engine as TEngine } from "../api/engine/Engine";

export const ENGINE_TITLE_FIELD = "id";

export const EngineTitle = (record: TEngine): string => {
  return record.id?.toString() || String(record.id);
};
