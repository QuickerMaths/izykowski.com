/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
import { fetcher } from "./fetcher";
import { IAdminJSResponse, IImageResource } from "@/types/api";

export function getImages() {
  const { data, error, isLoading } = useSWR<IAdminJSResponse<IImageResource>>(
    "/resources/image/actions/list",
    fetcher,
  );

  return { data, error, isLoading };
}
