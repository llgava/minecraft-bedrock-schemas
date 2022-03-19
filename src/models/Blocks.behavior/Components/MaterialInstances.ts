export interface MaterialInstances {
  [property_name: string]: {
    ambient_occlusion?: boolean;
    face_dimming?: boolean;
    render_method?: 'opaque' | 'double_sided' | 'blend' | 'alpha_test';
    texture?: string;
  };
}
