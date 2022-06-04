export interface Nameable {
  allow_name_tag_renaming?: boolean;
  always_show?: boolean;
  default_trigger?: string;
  name_actions?: NameActions;
}

interface NameActions {
  name_filter?: string;
  on_named?: string;
}
