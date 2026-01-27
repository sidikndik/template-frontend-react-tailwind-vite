import { fetcher } from "@/lib/fetcher";

export const getPost = () => {
  return fetcher("/posts");
};