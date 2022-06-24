export interface IProduct {
  title: string;
  prices: number[];
  imgUrl: string | undefined;
  id: number;
  filters?: string[];
  description?: string;
  calorie?: number[];
  imgUrlSmall?: string;
  imgUrlMedium?: string;
}
