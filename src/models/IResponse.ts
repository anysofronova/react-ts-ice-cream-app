export interface IResponse {
  page: number;
  limit?: number;
  sortBy?: string;
  filters?: string;
  search?: string;
  order?: string;
}
