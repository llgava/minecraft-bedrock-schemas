export interface RenderOffsets {
  main_hand?: HandRenderOffsets;
  off_hand?: HandRenderOffsets;
}

interface HandRenderOffsets {
  first_person?: {
    position?: [number, number, number];
    rotation?: [number, number, number];
    scale?: [number, number, number];
  };

  third_person?: {
    position?: [number, number, number];
    rotation?: [number, number, number];
    scale?: [number, number, number];
  };
}
