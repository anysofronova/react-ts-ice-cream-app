export interface ItemState {
  id: number;
  parameters: number[];
  title: string;
  imgUrl: string | undefined;
  finalPrice: number;
  count: number;
  filters?: string[];
}
