export class MinecraftBedrockSchemas {
  public version: string;
  public schemas: Schemas[];

  /**
   * @param version The Minecraft version.
   */
  constructor(version: string);

  /**
   * Generate all dynamic schemas.
   * @param save_to The path to save the schemas at `this.schemas` array.
   */
  public generateDynamicSchemas(save_to: string): void;

  /**
   * Generate .vscode/settings.json file with all schemas on ['json.schemas'] property.
   * @param save_to The path to save the settings.json file.
   */
  public generateSettingsFile(save_to: string): void;

  /**
   * Generate a new schema file.
   * @param schema_name The name of the schema
   * @param file_name The file name of the schema
   * @param file_path The path to main file of the schema
   * @param save_to The path to save the schema
   */
  public generateSchemaFromFile(schema_name: string, file_name: string, file_path: string, save_to: string): void;
}

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
