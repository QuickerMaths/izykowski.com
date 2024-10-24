/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
import { fetcher } from "./fetcher";
import { IAdminJSResponse, INewsResource } from "@/types/api";

export function getNews() {
  const { data, error, isLoading } = useSWR<IAdminJSResponse<INewsResource>>(
    "/resources/news/actions/list",
    fetcher,
  );

  return { data, error, isLoading };
}
