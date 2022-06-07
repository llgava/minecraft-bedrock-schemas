import SchemasConfig from '@models/schemas.json';

class Utils {
  public findSchemaConfig(schema_name: string): any {
    try {
      const data = JSON.parse(JSON.stringify(SchemasConfig));
      return data[schema_name];
    } catch (err) {
      throw new Error(`Schema ${schema_name} not found!`);
    }
  }
}

export default new Utils();
