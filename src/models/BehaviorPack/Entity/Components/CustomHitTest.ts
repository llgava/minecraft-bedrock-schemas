export interface CustomHitTest {
  hitboxes?: Hitboxes[];
}

interface Hitboxes {
  width?: number;
  height?: number;
  pivot?: [number, number, number];
}
