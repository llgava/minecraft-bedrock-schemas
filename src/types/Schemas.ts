export interface Schemas {
  fileName: string;
  fileMatch: string[];
  name: string;
  path: string;
}

export interface JSONSchema {
  fileMatch?: string[];
  url?: string;
}
