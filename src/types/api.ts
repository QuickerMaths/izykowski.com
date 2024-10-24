export interface IImageResource {
  title: string;
  id: number;
}

export interface IAdminJSResponse<T> {
  meta: {
    direction: "acs" | "dsc";
    page: number;
    perPage: number;
    sortBy: string;
    total: number;
  };
  records: T[];
}
