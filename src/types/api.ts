export interface IImageResource {
  title: string;
  id: number;
}

export interface INewsResource {
  id: number;
  title: string;
  params: {
    content: string;
  };
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
