export interface ResponseDTO<T> {
  data: T[];
  status: string;
  totalPages: number;
  page: number;
}
