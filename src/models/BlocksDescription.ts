export class BlocksDescription {
  public identifier: string;
  public is_experimental: boolean;
  public register_to_creative_menu: boolean;

  constructor() {
    this.identifier = 'namespace:block_name';
    this.is_experimental = false;
    this.register_to_creative_menu = true;
  }
}
